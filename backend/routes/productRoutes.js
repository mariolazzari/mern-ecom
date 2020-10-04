import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

const router = express.Router();

// get all products
router.get(
  "/",
  asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.json(products);
  })
);

// get product by id
router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (product) {
      res.json({ product });
    } else {
      res.status(404); //.json({ message: "Product not found." });
      throw new Error({ message: "Product not found." });
    }
  })
);

export default router;
