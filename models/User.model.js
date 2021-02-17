import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// to hash the password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// to generate the token
userSchema.methods.generateToken = async function () {
  try {
    const user = this;
    const token = await jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      {
        expiresIn: "30d",
      }
    );
    return token;
  } catch (err) {
    throw new Error(err.message);
  }
};

// to check for valid email and password
userSchema.statics.findByEmailAndPassword = async (email, password) => {
  const user = await User.findOne({ email: email });
  if (!user) {
    throw new Error("Invalid Email");
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Invalid Password");
  }
  return { success: true, user };
};

// to check if user exist or not
userSchema.statics.userExist = async (email) => {
  const user = await User.findOne({ email: email });
  if (user) {
    throw new Error("User Already Registered");
  }

  return false;
};

const User = mongoose.model("user", userSchema);

export default User;
