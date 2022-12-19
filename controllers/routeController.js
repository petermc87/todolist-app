const express = require('express')

const router = express.Router()
const dataController = require('./dataController')
const apiController = require('./apiRoutes')

//Index
router.get('/todos', dataController.index, apiController.index)
//Create
router.post('/todos', dataController.create, apiController.show)
//Show
router.get('/todos/:id', dataController.show, apiController.show)
//Delete
router.delete('/todos/:id', dataController.destroy, apiController.show)
//Update
router.put('/todos/:id', dataController.update, apiController.show)

module.exports = router