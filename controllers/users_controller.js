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

function show(req, res, next) {
  var eateriesId = req.user.eatery
  var eateryArr = []
  eateriesId.forEach(function(eateryId) {
    Eatery.findById(eateryId, function(err, eatery) {
      if (err) res.send(err)
      eateryArr.push(eatery)
      if (eateryArr.length === eateriesId.length) res.send(eateryArr)
    })
  })
}

function update(req, res) {
  User.findOne({
    _id: req.params.id
  }, function(err, user) {
    if (err) res.send(err)
    if (user.eatery.indexOf(req.body.id) !== -1) {
      res.send('Failure')
    } else {
      user.eatery.push(req.body.id)
      user.save()
      res.send('Success')
    }
  })
}

module.exports = {
  create,
  show,
  update
}
