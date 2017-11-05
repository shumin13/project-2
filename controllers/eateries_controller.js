const Eatery = require('../models/Eatery')
const User = require('../models/User')
const Rating = require('../models/Rating')
const mongoose = require('mongoose')

function list (req, res) {
  Eatery.find({}, function(err, eateries) {
    if (err) {
      res.send(err)
      return
    }
    res.render('home', {
      eateries: eateries
    })
  })
}

function create(req, res) {

  var newEatery = new Eatery({
    name: req.body.name,
    address: req.body.address,
    area: req.body.area,
    status: req.body.status,
    cuisine: req.body.cuisine,
    website: req.body.website,
    image: req.body.image
  })

  newEatery.save(function(err, createdEatery) {
    if (err) {
      return res.redirect('/eateries/register')
    }
    res.redirect('/eateries/register')
  })
}

function show(req, res) {
  Eatery.findById(req.params.id)
  .populate('rating')
  .then(eatery => {
    Rating.aggregate([
      { $match: { eatery: mongoose.Types.ObjectId(`${req.params.id}`) }},
      { $group: {
          _id: '$eatery',
          ambience: { $avg: '$ambience' },
          food: { $avg: '$food' },
          location: { $avg: '$location' },
          service: { $avg: '$service' },
          valueForMoney: { $avg: '$valueForMoney' },
        }
      }
    ]).then(rating => {
      res.render('eateries/show', {
        eatery,
        rating: rating[0]
      })
    })
  })
}

module.exports = {
  list,
  create,
  show
}
