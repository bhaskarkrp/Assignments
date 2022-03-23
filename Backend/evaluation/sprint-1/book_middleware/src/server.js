const { json } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const port = 8000;
const URL = "mongodb://127.0.0.1:27017/books";

const app = express();
app.use(express.json());

// app.use(middleware());

mongoose.connect(URL);
const conn = mongoose.connection;
conn.on("open", () => {
  console.log("Connected to Mongoose");
});

const bookController = require("./book.controller");
app.use("/books", bookController);

app.listen(port, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(`Listening to port ${port}`);
  }
});

// module.exports = middleware;
