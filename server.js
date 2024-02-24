// -----------------------------------------------------
// Dependencies
// -----------------------------------------------------
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const session = require('express-session')
const projectCtrl = require('./controllers/projectCtrl')
const userCtrl = require('./controllers/userCtrl')
const bodyParser = require('body-parser');
const cors = require('cors');

// -----------------------------------------------------
// Application Object
// -----------------------------------------------------
const app = express()
const { PORT = 3013 } = process.env
const MongoStore = require('connect-mongo')

// -----------------------------------------------------
// Middleware
// -----------------------------------------------------
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cors());

app.use(
  session({
    secret: process.env.SECRET,
    store: MongoStore.create({ mongoUrl: process.env.DATABASE_URL }),
    saveUninitialized: true,
    resave: false
    // username: req.session.username,
  })
)

// -----------------------------------------------------
// Routes INDUCESS
// -----------------------------------------------------
app.use('/projects', projectCtrl)
app.use('/user', userCtrl)

// Require and use the routes
app.use('/api/projects', require('./routes/projects'));
app.use('/api/tasks', require('./routes/tasks'));

// -----------------------------------------------------
// GET requests
// -----------------------------------------------------
app.get('/', (req, res) => {
  const username = req.session.username
  if (req.session.loggedIn) {
    res.redirect('/projects')
  } else {
    res.send('not logged in, but ok')
    // res.render('landing.ejs', { username })
  }
})

// -----------------------------------------------------
// Listener
// -----------------------------------------------------
app.listen(PORT, () => {
  console.log(`listening in port ${PORT}`)
})
