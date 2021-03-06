require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('./config/ppConfig')

const flash = require('connect-flash')
const bodyParser = require('body-parser')
const url = process.env.MLAB_URI
const app = express()
const usersRoute = require('./routes/userRoute')
const eateriesRoute = require('./routes/eateryRoute')
const ratingsRoute = require('./routes/ratingRoute')

mongoose.Promise = global.Promise
mongoose.connect(url, {
  useMongoClient: true
}).then(
  function () {
    console.log('connected successfully')
  },
  function (err) {
    console.log(err)
  }
)

app.use(express.static('public'))
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    toJSON: function (object) {
      return JSON.stringify(object)
    }
  }
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  store: new MongoStore({
    url: process.env.MLAB_URI
  })
}))
app.use(flash())

app.use(passport.initialize())
app.use(passport.session())

app.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})

app.use('/', eateriesRoute)
app.use('/users', usersRoute)
app.use('/ratings', ratingsRoute)

app.locals = {
  GOOGLE_MAPS_KEY: process.env.GOOGLE_MAPS_KEY
}

const port = process.env.PORT || 5000
app.listen(port, function () {
  console.log(`express is running on ${port}`)
})
