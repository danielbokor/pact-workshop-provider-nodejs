const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const usersRouter = require('./routes/users')
const reviewsRouter = require('./routes/reviewsRouter')
const statsRouter = require('./routes/statsRouter')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/users', usersRouter)
app.use('/reviews', reviewsRouter)
app.use('/stats', statsRouter)
app.get('/health', function(req, res) {
  return res.status(200).end()
})

module.exports = app
