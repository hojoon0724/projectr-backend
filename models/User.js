const mongoose = require('./connection')
const bcrypt = require('bcryptjs')
const { Schema, model } = mongoose

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  created_on: { type: Date, value: Date.now() }
})

const User = model('User', userSchema)
module.exports = User
