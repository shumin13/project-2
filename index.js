require('dotenv').config()

const mongoose = require('mongoose')
const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('connect-flash')
const bodyParser = require('body-parser')
const url = process.env.MLAB_URI
// || 'mongodb://localhost:27017/makanapa'
const app = express()
const usersRoute = require('./routes/userRoute')
// const placesRoute = require('./routes/placeRoute')

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
  defaultLayout: 'main'
}))
app.set('view engine', 'handlebars')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// app.use(session({
//   secret: process.env.SESSION_SECRET,
//   resave: false,
//   saveUninitialized: true,
//   store: new MongoStore({
//     url: process.env.MLAB_URI
//   })
// }))
// app.use(flash())

// public paths
app.get('/', function (req, res) {
  res.render('home')
})

// non public paths
app.use('/users', usersRoute)
// app.use('/places', placesRoute)

// app.locals = {
//   GOOGLE_PLACE_KEY: process.env.GOOGLE_PLACE_KEY,
// }

const port = process.env.PORT || 4000
app.listen(port, function () {
  console.log(`express is running on ${port}`)
})
