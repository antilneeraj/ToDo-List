const express = require("express");
const Task = require("../models/task");
const router = express.Router();

// Create Task
router.post("/", async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

// Get Tasks
router.get("/", async (_req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

// Update Task
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(task);
});

// Delete Task
router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
});

module.exports = router;
