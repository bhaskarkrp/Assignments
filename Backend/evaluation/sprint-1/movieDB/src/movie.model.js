const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movie_name: {
    type: String,
    required: true,
  },
  movie_genre: {
    type: String,
    required: true,
  },
  production_year: {
    type: Number,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("movie", movieSchema);
