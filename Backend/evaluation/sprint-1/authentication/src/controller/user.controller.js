const express = require("express");
const userRoute = express.Router();
const User = require("../models/user.model");

userRoute.get("/", async (req, res) => {
  try {
    const users = await User.find().select("-password -createdAt"); // .select()-> This will remove these two field from json data and give us
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
});

// userRoute.post("/", async (req, res) => {
//   try {
//     const users = await User.create(req.body);
//     res.status(200).json(users);
//   } catch (error) {
//     res.status(500).json({ Error: error.message });
//   }
// });

module.exports = userRoute;
