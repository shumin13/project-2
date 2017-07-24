const User = require('../models/User')
const passport = require('../config/ppConfig')

function create (req, res, next) {
  var newUser = new User ({
    name: req.body.user.name,
    email: req.body.user.email,
    password: req.body.user.password
  })

  newUser.save(function(err, createdUser){
    if (err) {
    //  next (err)
    return res.send(err)
    // req.flash('errors', err.message)
    // return res.redirect('/users/register')
    }
    // res.redirect('/')

    else {
          // FLASH
          passport.authenticate('local', {
            successRedirect: '/'
          })(req, res)
        }

    // res.send({
    //   status: 'ok',
    //   message: 'New user created!'
    // })
  })
}

module.exports = {
  create
}
