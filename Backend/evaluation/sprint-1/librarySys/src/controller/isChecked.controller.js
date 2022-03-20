const express = require("express");
const Book = require("../models/book.model");

const checkedRoute = express.Router();

checkedRoute.get("/true", async (req, res) => {
  try {
    const checkedBooks = await Book.find({ $isChecked: true });
    res.status(200).json(checkedBooks);
  } catch (err) {
    res.status(404).json({ Error: err.message });
  }
});

checkedRoute.get("/false", async (req, res) => {
  try {
    const checkedBooks = await Book.find({ $isChecked: false });
    res.status(200).json(checkedBooks);
  } catch (err) {
    res.status(404).json({ Error: err.message });
  }
});

module.exports = checkedRoute;
