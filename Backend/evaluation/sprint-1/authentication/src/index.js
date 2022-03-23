const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

// console.log(process.env.URL);

mongoose.connect(process.env.URL);
const conn = mongoose.connection;
conn.on("open", () => {
  console.log("Connected to mongoose database " + process.env.URL);
});

const userController = require("./controller/user.controller");
app.use("/users", userController);

const productController = require("./controller/product.controller");
app.use("/products", productController);

const router = require("./controller/auth.controller");
app.use("/auth", router);

app.listen(process.env.PORT, (error) => {
  if (error) {
    console.log("Error: " + error);
  } else {
    console.log("Listening to " + process.env.PORT);
  }
});
