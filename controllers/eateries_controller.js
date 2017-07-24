const Eatery = require('../models/Eatery')

function create (req, res, next) {
  var newEatery = new Eatery ({
    // name: req.body.name,
    // email: req.body.email,
    // password: req.body.password
  })

  newEatery.save(function(err, createdEatery){
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
