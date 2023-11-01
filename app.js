const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const app = express()

const indexRouter = require('./routes/index')
const personRouter = require('./routes/person')
const newRouter = require('./routes/new')
const deleteRouter = require('./routes/delete')
const updateRouter = require('./routes/update')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))


app.use('/', indexRouter)
app.use('/person', personRouter)
app.use('/new', newRouter)
app.use('/delete', deleteRouter)
app.use('/update', updateRouter)

module.exports = app