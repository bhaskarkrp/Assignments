const express = require("express");
const Section = require("../models/section.model");
const crudController = require("./crud.controller");
const Book = require("../models/book.model");

const controller = crudController(Section);

const sectionRoute = express.Router();

//Read
sectionRoute.get("/", controller.getAll);

//Find books in a section
sectionRoute.get("/:id/books", async (req, res) => {
  try {
    const booksInSection = await Book.find({ section: req.params.id });
    res.status(200).json(booksInSection);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Find books in a section that are not checked
sectionRoute.get("/:id/notChecked", async (req, res) => {
  try {
    const noCheckedBook = await Book.find({
      $and: [{ section: req.params.id }, { isCheckedOut: false }],
    });
    res.status(200).json(noCheckedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// find books of 1 author in section
sectionRoute.get("/:id/books_of_author", async (req, res) => {
  try {
    const bookOfAuthor = await Book.find({ authors: req.params.id });
    res.status(200).send(bookOfAuthor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Create
sectionRoute.post("/", controller.post);

// Update
sectionRoute.patch("/:id", controller.patch);

//Delete
sectionRoute.delete("/:id", controller.delete);

module.exports = sectionRoute;
