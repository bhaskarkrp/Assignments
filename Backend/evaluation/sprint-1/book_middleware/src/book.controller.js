const express = require("express");
const bookController = express.Router();
// const middleware = require("./server");
const Book = require("./book.model");

const middleware = async (req, res, next) => {
  // console.log(`Requested by Bhaskar to get ${res}`);
  // let obj = { name: req.name };
  // console.log(req.params);
  // req.name = req.params.name;
  const { name } = req.query;
  const data = await Book.find();
  console.log("api_requested_by: ", name);
  res.status(200).json({ api_requested_by: name, books: data });

  next();
};

bookController.get("/", middleware, async (req, res) => {
  try {
    // // console.log(req.middleware);
    // const data = await Book.find();
    // // console.log(data);
    // res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

bookController.post("/", async (req, res) => {
  try {
    const createdBook = await Book.create(req.body);
    res.status(200).json(createdBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = bookController;
