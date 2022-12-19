const mongoose = require('mongoose')

const { Schema, model } = mongoose

const toDoSchema = new Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true }
})

const ToDo = model('ToDo', toDoSchema)

module.exports = ToDo
