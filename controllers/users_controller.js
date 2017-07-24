const User = require('../models/User')

function create (req, res, next) {
  var newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  newUser.save(function(err, createdUser){
    if (err) {
    //  next (err)
    // return res.send(err)
    // req.flash('errors', err.message)
    return res.redirect('/register')
    }
    res.redirect('/')
    // res.send({
    //   status: 'ok',
    //   message: 'New user created!'
    // })
  })
}

module.exports = {
  create
}
