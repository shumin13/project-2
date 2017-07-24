const User = require('../models/User')
const passport = require('../config/ppConfig')

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
    }
    else {
      passport.authenticate('local', {
        successRedirect: '/'
      })(req, res)
    }
  })
}

module.exports = {
  create
}
