const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8000;

const URL =
  "mongodb+srv://bhaskar:123456789Bhaskar@cluster0.jg9cr.mongodb.net/tasks?retryWrites=true&w=majority";

mongoose.connect(URL);
const conn = mongoose.connection;
conn.on("open", () => {
  console.log("Connected to MongoBD " + URL);
});

const app = express();
app.use(express.json());
app.use(cors());

const taskRoutes = require("./controller/task.controller");
app.use("/tasks", taskRoutes);

app.listen(port, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("listening on port " + port);
  }
});
