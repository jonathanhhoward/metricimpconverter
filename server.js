'use strict'

require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')

const apiRoutes = require('./routes/api.js')
const fccTestingRoutes = require('./routes/fcctesting.js')
const runner = require('./test-runner')

const app = express()

app.use(helmet())

app.use('/public', express.static(process.cwd() + '/public'))

app.use(cors({ origin: '*' })) //For FCC testing

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.route('/')
  .get(function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html')
  })

fccTestingRoutes(app)

apiRoutes(app)

app.use(function (req, res, next) {
  res.status(404)
    .type('text')
    .send('Not Found')
})

const server = app.listen(process.env.PORT || 3000, function () {
  console.log('Listening on port ' + server.address().port)
  if (process.env.NODE_ENV === 'test') {
    console.log('Running Tests...')
    setTimeout(function () {
      try {
        runner.run()
      } catch (e) {
        const error = e
        console.log('Tests are not valid:')
        console.log(error)
      }
    }, 1500)
  }
})

module.exports = app //For FCC testing
