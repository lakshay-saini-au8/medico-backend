import asyncHandler from "express-async-handler";
import Product from "../models/Product.model.js";

// @desc Fetch all the products
// @route GET /api/v1/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
  const { q, range, category } = req.query;
  let products;
  if (q === "top") {
    products = await Product.find({})
      .sort("-price")
      .limit(8)
      .populate("createdBy", "name address phone email ");
    res.json(products);
  } else {
    const query = {};
    let priceSort = "-createdAt";
    if (range) {
      if (range === "ascending") {
        priceSort = "price";
      }
      if (range === "descending") {
        priceSort = "-price";
      }
    }
    if (category) {
      query["category"] = category;
    }
    products = await Product.find(query)
      .sort(priceSort)
      .populate("user", "name email ");
    res.json(products);
  }
});
// @desc Fetch single products
// @route GET /api/v1/products/:id
// @access Public
export const getProductsById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate(
    "user",
    "name email "
  );
  if (product) {
    res.json(product);
  } else {
    throw new Error("Product not found");
  }
});

// @desc    Delete a product
// @route   DELETE /api/v1/products/:id
// @access  Private/Admin
export const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc    Create a product
// @route   POST /api/v1/products
// @access  Private/Admin
export const createProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, category } = req.body;
  const product = new Product({
    name: name || "Sample name",
    price: price || 0,
    user: req.user._id,
    image:
      image ||
      "https://www.netmeds.com/images/product-v1/600x600/14149/tentex_royal_capsule_10_s_0.jpg",
    category: category || "medicine",
    description: description || "Sample description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc    Update a product
// @route   PUT /api/v1/products/:id
// @access  Private/Admin
export const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, category } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name || product.name;
    product.price = price || product.price;
    product.description = description || product.description;
    product.image = image || product.image;
    product.category = category || product.category;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});
