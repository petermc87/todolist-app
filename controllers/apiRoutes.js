const apiController = {
  index (req, res, next) {
    res.json(res.locals.data.todos)
  },
  show (req, res, next) {
    res.json(res.locals.data.todo)
  }

}

module.exports = apiController
