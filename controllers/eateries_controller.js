const Eatery = require('../models/Eatery')

function create (req, res, next) {
  var newEatery = new Eatery ({
    name: req.body.eatery.name,
    address: req.body.eatery.address,
    area: req.body.eatery.area,
    openingHours: req.body.eatery.openingHours,
    status: req.body.eatery.status,
    type: req.body.eatery.type,
    cuisine: req.body.eatery.cuisine,
    specialities: req.body.eatery.specialities,
    facilities: req.body.eatery.facilities,
    tel: req.body.eatery.tel,
    website: req.body.eatery.website,
    reservation: req.body.eatery.reservation,
    promotion: req.body.eatery.promotion
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
