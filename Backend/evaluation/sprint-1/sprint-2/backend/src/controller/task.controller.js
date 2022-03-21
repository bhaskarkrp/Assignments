const express = require("express");
// const mongoose = require("mongoose");
const Task = require("../model/task.model");

const routes = express.Router();

routes.get("/", async (req, res) => {
  try {
    const allTasks = await Task.find();
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routes.get("/:id", async (req, res) => {
  try {
    const allTasks = await Task.findById(req.params.id);
    console.log(req.params.id);
    res.status(200).json(allTasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//Create
routes.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const createdTask = await Task.create(req.body);
    res.status(200).json(createdTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Patch
routes.patch("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
//Delete
routes.delete("/:id", async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = routes;
