const express = require("express");
const mongoose = require("mongoose");
const port = 8000;

const URL = "mongodb://127.0.0.1:27017/movies";

const app = express();
app.use(express.json());

mongoose.connect(URL);
const conn = mongoose.connection;
conn.on("open", () => {
  console.log(`Database Connection established..!`);
});

const movieController = require("./movie.controller");
app.use("/movies", movieController);

app.listen(port, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log(`listening on ${port}`);
  }
});
