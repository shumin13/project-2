const Rating = require('../models/Rating')
const Eatery = require('../models/Eatery')
const User = require('../models/User')

function show(req, res) {
  Eatery.findById(req.params.id, function(err, eatery) {
    if (err) {
      res.send(err)
      return
    }
    res.render('ratings/show', {
      eatery: eatery
    })
  })
}

function create(req, res) {
  var newRating = new Rating({
    ambience: req.body.ambience,
    food: req.body.food,
    location: req.body.location,
    service: req.body.service,
    valueForMoney: req.body.valueForMoney,
    dateOfVisit: req.body.dateOfVisit,
    comment: req.body.comment,
    eatery: req.params.id,
    user: req.user
  })

  newRating.save(function(err, createdRating) {
    if (err) {
      return res.redirect(`/ratings/${req.params.id}`)
    }
    Eatery.findOne({
      _id: req.params.id
    }, function(err, eatery) {
      if (err) res.send(err)
      eatery.rating.push(createdRating.id)
      eatery.save()
    })
    User.findOne({
      _id: req.user
    }, function(err, user) {
      if (err) res.send(err)
      user.rating.push(createdRating.id)
      user.save()
    })
    res.redirect(`/eateries/${req.params.id}`)
  })
}

module.exports = {
  show,
  create
}
