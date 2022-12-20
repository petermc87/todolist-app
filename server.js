// -- REQUIRE MODULED --//
require('dotenv').config()
require('./config/database')
const express = require('express')

const app = express()
const PORT = process.env.PORT || 3001
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(express.json())

app.use('/api', require('./controllers/routeController.js'))
app.use(cors())

app.listen(PORT, () => {
  console.log('Listening on ', PORT)
})
