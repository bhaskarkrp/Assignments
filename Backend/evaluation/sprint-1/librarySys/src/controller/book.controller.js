const express = require("express");
const Book = require("../models/book.model");
const crudController = require("./crud.controller");

const bookRoute = express.Router();

const controller = crudController(Book);

bookRoute.get("/", async (req, res) => {
  try {
    const query = req.query;
    // console.log(query.isCheckedOut);
    if (query.isCheckedOut) {
      const book = await Book.find({ isCheckedOut: query.isCheckedOut });
      res.status(200).json(book);
    } else {
      const book = await Book.find();
      res.status(200).json(book);
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

bookRoute.get("/:id", controller.getOne);

bookRoute.post("/", controller.post);

bookRoute.patch("/:id", controller.patch);

bookRoute.delete("/:id", controller.delete);

module.exports = bookRoute;
