// -----------------------------------------------------
// Dependencies
// -----------------------------------------------------
const express = require('express')
const project = require('../models/Project')
const router = express.Router()

// -----------------------------------------------------
// Middleware
// -----------------------------------------------------
router.use((req, res, next) => {
  if (req.session.loggedIn) {
    next()
  } else {
    res.redirect('/')
  }
})

// -----------------------------------------------------
// Routes
// -----------------------------------------------------

// -----------------------------------------------------
// Export Code
// -----------------------------------------------------
module.exports = router
