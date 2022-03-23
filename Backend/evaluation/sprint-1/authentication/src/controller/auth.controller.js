const express = require("express");
var jwt = require("jsonwebtoken");
const router = express.Router();
const Product = require("../models/product.model");
const User = require("../models/user.model");

const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

router.post("/register", async (req, res) => {
  try {
    // const product = await Product.find();
    // 1. Check if email is already in use.
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).json({ message: "Email already in use" });
    }
    // 2.if Don't exist, create a new user
    user = await User.create(req.body);
    // console.log(user);
    let token = newToken(user);
    return res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    // 1. does user exist
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    // 2. if exist check password is matching
    const matching = user.checkPassword(req.body.password); //custom method written in user.model to check password
    // 3. if not matching thorw 400
    if (!matching) {
      res.status(404).json({ message: "User not found" });
    }
    // 4. if matching then give him the toke
    let token = newToken(user);

    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

module.exports = router;
