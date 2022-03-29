const express = require("express");
const mongoose = require("mongoose");
const Data = require("./data.model");

const app = express();
app.use(express.json());

const URL = "mongodb://127.0.0.1:27017/movies";

mongoose.connect(URL);
const conn = mongoose.connection;
conn.on("open", () => {
  console.log("Connected to DB");
});

app.get("/", async (req, res) => {
  const data = await Data.find();
  //   console.log(data);
  return res.status(200).send(data);
});
app.post("/", async (req, res) => {
  const data = await Data.create(req.body);
  res.status(200);
  console.log(data);
});

app.listen(8000, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("listening on port 8000");
  }
});
