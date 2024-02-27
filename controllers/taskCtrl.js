// controllers/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET tasks by project ID
router.get('/project/:projectId', async (req, res) => {
  try {
    const tasks = await Task.find({ project: req.params.projectId });
    res.json(tasks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// GET task by ID
router.get('/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    res.json(task);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST new task
router.post('/', async (req, res) => {
  try {
    const { title, description, status, project } = req.body;
    const newTask = new Task({ title, description, status, project });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// PUT update task by ID
router.put('/:id', async (req, res) => {
  try {
    const { title, description, status } = req.body;
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, status },
      { new: true }
    );
    res.json(updatedTask);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE task by ID
router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
