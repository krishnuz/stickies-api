const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const setupController = require('./controllers/setupController')
const apiController = require('./controllers/apiController')
const app = express()

const port = process.env.PORT || 4000

app.use('/assets', express.static(`${__dirname}/public`))

const con = mongoose.connect(config.getDBConnectionString())

setupController(app)
apiController(app)

app.listen(port)