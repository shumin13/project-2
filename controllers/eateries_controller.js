const Eatery = require('../models/Eatery')
const Rating = require('../models/Rating')
const mongoose = require('mongoose')

async function list (req, res) {
  try {
    const eateries = await Eatery.find({})
    res.render('home', {
      eateries
    })
  } catch (err) {
    console.log(err)
  }
}

async function create (req, res) {
  try {
    let newEatery = new Eatery({
      name: req.body.name,
      address: req.body.address,
      area: req.body.area,
      status: req.body.status,
      cuisine: req.body.cuisine,
      website: req.body.website,
      image: req.body.image
    })
    await newEatery.save()
    res.redirect('/eateries/register')
  } catch (err) {
    console.log(err)
  }
}

async function show (req, res) {
  const eatery = await Eatery.findById(req.params.id).populate('rating')
  const rating = await Rating.aggregate([
    {
      $match: {
        eatery: mongoose.Types.ObjectId(`${req.params.id}`) }
    },
    {
      $group: {
        _id: '$eatery',
        ambience: { $avg: '$ambience' },
        food: { $avg: '$food' },
        location: { $avg: '$location' },
        service: { $avg: '$service' },
        valueForMoney: { $avg: '$valueForMoney' }
      }
    }
  ])
  res.render('eateries/show', {
    eatery,
    rating: rating[0]
  })
}

module.exports = {
  list,
  create,
  show
}
