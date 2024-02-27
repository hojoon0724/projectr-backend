// models/Task.js
const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: ['todo', 'inProgress', 'blocked', 'completed'], default: 'todo' },
  project: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
});

module.exports = mongoose.model('Task', taskSchema);
