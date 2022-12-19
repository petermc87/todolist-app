const ToDo = require('../models/todo')

const dataController = {

  index (req, res, next) {
    ToDo.find({}, (err, foundToDos) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.todos = foundToDos
        next()
      }
    })
  },
  create (req, res, next) {
    ToDo.create(req.body, (err, createdToDo) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.todo = createdToDo
        next()
      }
    })
  },
  show (req, res, next) {
    ToDo.findById(req.params.id, (err, foundToDo) => {
      if (err) {
        res.status(400).send({
          msg: err.message,
          output: 'Could not find a to do with that ID'
        })
      } else {
        res.locals.data.todo = foundToDo
        next()
      }
    })
  },
  update (req, res, next) {
    ToDo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedToDo) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.todo = updatedToDo
        next()
      }
    })
  },
  destroy (req, res, next) {
    ToDo.findByIdAndDelete(req.params.id, (err, deletedToDo) => {
      if (err) {
        res.status(400).send({
          msg: err.message
        })
      } else {
        res.locals.data.todo = deletedToDo
        next()
      }
    })
  }

}

module.exports = dataController