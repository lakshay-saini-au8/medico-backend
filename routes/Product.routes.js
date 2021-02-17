import express from "express";
import { protect, admin } from "../middlewares/Auth.middleware.js";
import {
  getProducts,
  getProductsById,
  deleteProduct,
  updateProduct,
  createProduct,
} from "../controllers/Product.controller.js";
const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductsById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
