import dotenv from "dotenv";
import { productData } from "./data/product.js";
import Product from "./models/Product.model.js";
import connectDB from "./startup/connectDB.js";
dotenv.config();

connectDB();

const importProduct = async () => {
  try {
    //   creating user data us
    for (let item of productData) {
      await Product.create(item);
    }

    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else if (process.argv[2] === "product") {
  importProduct();
} else if (process.argv[2] === "seller") {
  importSeller();
} else {
  importData();
}
