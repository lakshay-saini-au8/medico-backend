import express from "express";
import { notFound, errorHandler } from "../middlewares/Error.middleware.js";
import usersRoutes from "../routes/User.routes.js";
import productRoutes from "../routes/Product.routes.js";
import orderRoutes from "../routes/Order.routes.js";

const baseRoutes = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.get("/", (req, res) => {
    res.send("Health check");
  });
  app.use("/api/v1/users", usersRoutes);
  app.use("/api/v1/products", productRoutes);
  app.use("/api/v1/orders", orderRoutes);
  app.use(notFound);
  app.use(errorHandler);
};

export default baseRoutes;
