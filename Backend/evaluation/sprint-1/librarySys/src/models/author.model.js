const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true, //It will be unique
  },
  last_name: {
    type: String,
    required: true,
  },
  books: [
    {
      type: mongoose.Schema.Types.ObjectId, //will refer to book collection
      ref: "book",
    },
  ], //One author has many books, so we used array here -> one to many
});

module.exports = mongoose.model("author", authorSchema);
