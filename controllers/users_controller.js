const User = require('../models/User')
const passport = require('../config/ppConfig')
const Eatery = require('../models/Eatery')

function create(req, res, next) {
  var newUser = new User({
    name: req.body.user.name,
    email: req.body.user.email,
    password: req.body.user.password
  })

  newUser.save(function(err, createdUser) {
    if (err) {
      req.flash('error', err.errors.email.message)
      return res.redirect('/users/register')
    } else {
      passport.authenticate('local', {
        successRedirect: '/'
      })(req, res)
    }
  })
}

// TO FIX
function show(req, res, next) {
  var bookmark = req.body.eatery
  var coordinatesArr = []
  bookmark.forEach(function(eatery) {
    Eatery.findById(eatery, function(err, doc) {
      if (err) res.send(err)
      coordinatesArr.push(doc)
      console.log(coordinatesArr)
    })
    // console.log(coordinatesArr)
  })
  // console.log(coordinatesArr);
  // res.send(coordinatesArr)
  // coordinates: coordinatesArr
  // })
}

// TO FIX
function update(req, res) {
  User.findOne({
    _id: req.body.user._id
  }, function(err, user) {
    if (err) res.send(err)
    if (user.eatery.hasOwnProperty(req.body.eateryId)){
      res.send('Eatery already saved in user account.')
    } else {
      user.eatery.push(req.body.eateryId)
      user.save()
      res.send('Done')
    }
  })
}

module.exports = {
  create,
  show,
  update
}
