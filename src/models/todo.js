const mongoose = require('mongoose')
const validator = require('validator')

const todoSchema = new mongoose.Schema({
  createdOn: {
    type: Date,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  mood: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  capsule: {
    type: String,
    required: false
  },
  docType: {
    type: String,
    required: true
  }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo
