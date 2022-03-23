const mongoose = require("mongoose");

const productModel = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("product", productModel);
