const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8000;

const app = express();
app.use(express.json());
app.use(cors());

const URL = "mongodb://127.0.0.1:27017/library";

mongoose.connect(URL);
const conn = mongoose.connection;
conn.on("open", () => {
  console.log("Connected to MongoBD " + URL);
});

const checkedRoutes = require("./controller/isChecked.controller");
app.use("/isChecked", checkedRoutes);

const booksRoutes = require("./controller/book.controller");
app.use("/book", booksRoutes);

const sectionRoutes = require("./controller/section.controller");
app.use("/section", sectionRoutes);

const authorRoutes = require("./controller/author.controller");
app.use("/author", authorRoutes);

app.listen(port, (error) => {
  if (error) {
    console.log("Error", error.message);
  } else {
    console.log("Connected to port " + port);
  }
});
