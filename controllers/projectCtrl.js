// routes/projects
const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET all projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST create a new project
router.post('/projects', async (req, res) => {
  const project = new Project({
    name: req.body.name,
    owner: req.body.owner,
    status: req.body.status,
    guests: req.body.guests,
    finished_on: req.body.finished_on,
    tasks: req.body.tasks
  });

  try {
    const newProject = await project.save();
    res.status(201).json(newProject);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// PUT update a project
router.put('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      project.name = req.body.name || project.name;
      project.owner = req.body.owner || project.owner;
      project.status = req.body.status || project.status;
      project.guests = req.body.guests || project.guests;
      project.finished_on = req.body.finished_on || project.finished_on;
      project.tasks = req.body.tasks || project.tasks;

      const updatedProject = await project.save();
      res.json(updatedProject);
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE a project
router.delete('/projects/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) {
      await project.remove();
      res.json({ message: 'Project deleted' });
    } else {
      res.status(404).json({ message: 'Project not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
