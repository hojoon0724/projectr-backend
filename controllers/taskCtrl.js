// routes/tasks
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET all tasks
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new task
router.post('/tasks', async (req, res) => {
  const task = new Task({
    name: req.body.name,
    status: req.body.status,
    category: req.body.category,
    guests: req.body.guests,
    priority: req.body.priority,
    assigned_to: req.body.assigned_to,
    department: req.body.department
  });

  try {
    const newTask = await task.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a task
router.put('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      task.name = req.body.name || task.name;
      task.status = req.body.status || task.status;
      task.category = req.body.category || task.category;
      task.guests = req.body.guests || task.guests;
      task.priority = req.body.priority || task.priority;
      task.assigned_to = req.body.assigned_to || task.assigned_to;
      task.department = req.body.department || task.department;

      const updatedTask = await task.save();
      res.json(updatedTask);
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a task
router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      await task.remove();
      res.json({ message: 'Task deleted' });
    } else {
      res.status(404).json({ message: 'Task not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
