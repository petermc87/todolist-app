// -- REQUIRE MODULED --//
require('dotenv').config()
require('./config/database')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 3001
const cors = require('cors')

const app = express()


app.use(express.json())
app.use((req, res, next) => {
  res.locals.data = {}
  next()
})

app.use(express.static(path.join(__dirname, 'build')))


app.use('/api', require('./controllers/routeController.js'))
app.use(cors())

app.listen(PORT, () => {
  console.log('Listening on ', PORT)
})
