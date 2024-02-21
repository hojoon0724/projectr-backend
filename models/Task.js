const mongoose = require('./connection')
const { Schema, model } = mongoose

const taskSchema = new Schema({
  project: { type: String, required: true },
  username: { type: String, required: true },
  task: { type: String },
  status: '',
  // { type: String },
  category: 'none',
  // { type: String },
  guests: 'none',
  // [{ type: String }],
  priority: { type: Number },
  assigned_to: 'none',
  // { type: String },
  department: 'default',
  created_on: { type: Date },
  finished_on: { type: Date }
})

const Task = model('Task', taskSchema)
module.exports = Task
