const express = require("express");
const Movie = require("./movie.model");

const movieController = express.Router();

//Read
movieController.get("/", async (req, res) => {
  try {
    const { name, nameNot, gte, lte, pyear, sort } = req.query;
    // console.log(name, nameNot, gte, lte, pyear, sort);

    if (name) {
      const movies = await Movie.find({ movie_name: name });
      res.status(200).json(movies);
    } else if (nameNot) {
      const movies = await Movie.find({ movie_name: { $ne: nameNot } });
      res.status(200).json(movies);
    } else if (gte && pyear) {
      // console.log("OK");
      const movies = await Movie.find({
        $and: [{ budget: { $gte: gte }, production_year: { $gt: pyear } }],
      });
      res.status(200).json(movies);
    } else if (gte) {
      const movies = await Movie.find({ budget: { $gte: gte } });
      res.status(200).json(movies);
    } else if (lte) {
      const movies = await Movie.find({ budget: { $lte: lte } });
      res.status(200).json(movies);
    } else if (sort) {
      const movies = await Movie.find()
        .sort({ production_year: 1 })
        .skip(1)
        .limit(2);
      res.status(200).json(movies);
    } else {
      const movies = await Movie.find();
      res.status(200).json(movies);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Read One
movieController.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    res.status(200).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Create
movieController.post("/", async (req, res) => {
  try {
    const AddedMovie = await Movie.create(req.body);
    res.status(200).json(AddedMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Update
movieController.patch("/:id", async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Delete
movieController.delete("/:id", async (req, res) => {
  try {
    const movies = await Movie.findByIdAndDelete(req.params.id);
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = movieController;
