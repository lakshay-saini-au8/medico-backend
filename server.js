import express from "express";
import dotenvs from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./startup/connectDB.js";
import baseRoutes from "./startup/baseRoutes.js";
const app = express();
dotenvs.config();
connectDB();
// // enables cors

app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  })
);
app.use(morgan("dev"));
baseRoutes(app);
const port = process.env.PORT || process.env.PORT_NO;
app.listen(port, console.log(`server is running at ${port}`));
