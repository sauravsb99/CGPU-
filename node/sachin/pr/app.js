const express = require('express')
const helmet = require('helmet')
const http = require('http')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const appConfig = require('./app.config.js')

app.use(helmet())

// Express Route File Requires
const __apiName = require('./api/name.js')
const __api3000 = require('./api/3000.js')

// <REQUIRES> DON'T CHANGE THIS LINE - Express route file requires will be added above here.

app.use(express.static(path.resolve(__dirname, 'src/public')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Express Routing
app.use('/api/name', __apiName)
app.use('/api/3000', __api3000)

// <ROUTING-E> DON'T CHANGE THIS LINE - Express routing will be added above here.

// React Routing

// <ROUTING-R> DON'T CHANGE THIS LINE - React routing will be added above here.

http.createServer(app).listen(appConfig.port)

module.exports = app
