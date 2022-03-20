const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, //It will be unique
  },
  body: {
    type: String,
    required: true,
  },
  authors: [
    {
      type: mongoose.Schema.Types.ObjectId, //will refer to author collection
      ref: "author",
      required: true,
      min: 1,
    },
  ], //One book has many authors, so we used array here -> one to many
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "section",
    required: true,
  }, //One books has only one section -> one to one
  isCheckedOut: { type: Boolean, default: false, required: true },
});

module.exports = mongoose.model("book", bookSchema);
