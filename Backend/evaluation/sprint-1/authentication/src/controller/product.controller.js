const express = require("express");
const authCheck = require("../middlewares/auth.middleware");
const productRoute = express.Router();
const Product = require("../models/product.model");

productRoute.get("/", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

productRoute.post("/", authCheck, async (req, res) => {
  try {
    // console.log(req.user);
    const product = await Product.create({
      ...req.body,
      user_id: req.user.user._id,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

// Get my products only
productRoute.get("/my", authCheck, async (req, res) => {
  try {
    // console.log(req.user.user._id);
    const product = await Product.find({ user_id: req.user.user._id });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = productRoute;
