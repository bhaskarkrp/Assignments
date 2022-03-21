const mongoose = require("mongoose");

const taskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  subTask: {
    type: String,
  },
});

module.exports = mongoose.model("task", taskSchema);
