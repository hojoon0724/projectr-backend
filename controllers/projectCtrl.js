// controllers/projects.js
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// POST new project
router.post('/', async (req, res) => {
  try {
    const { name, dueDate } = req.body;
    const newProject = new Project({ name, dueDate });
    await newProject.save();
    res.status(201).json(newProject);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// DELETE project by ID
router.delete('/:id', async (req, res) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.json({ message: 'Project deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;
