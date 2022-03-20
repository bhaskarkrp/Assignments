const express = require("express");
const Author = require("../models/author.model");
const Book = require("../models/book.model");

const authorRoute = express.Router();

const crudController = require("./crud.controller");

const controller = crudController(Author);

//Create
authorRoute.post("/", controller.post);

// Read
authorRoute.get("/", controller.getAll);

// Read books of an author by author id
authorRoute.get("/:id/books", async (req, res) => {
  try {
    const authorsBooks = await Book.find({ authors: req.params.id });
    res.status(200).json(authorsBooks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update
authorRoute.patch("/:id", controller.patch);

//Delete
authorRoute.delete("/:id", controller.delete);

module.exports = authorRoute;
