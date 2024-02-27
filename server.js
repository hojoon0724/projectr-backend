// server.js

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan')
const cors = require('cors');
const projectsRouter = require('./controllers/projectCtrl');
const tasksRouter = require('./controllers/taskCtrl');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

mongoose.connect('mongodb+srv://izzy-2023:islam1988@cluster0.osvhfet.mongodb.net/projectbackend?retryWrites=true&w=majority');
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));

app.use('/projects', projectsRouter);
app.use('/tasks', tasksRouter);

app.listen(5000, () => console.log('Server running on port 5000'));
