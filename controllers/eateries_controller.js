const Eatery = require('../models/Eatery')

function create (req, res, next) {

//   var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address={${req.body.address}}&key=${process.env.GOOGLE_MAPS_KEY}`
//
//   $.get(geocodeUrl).done(function(data) {
//     var results = data.results
//
//     res.send(results[0].location.lat)
// })
// }



  var newEatery = new Eatery ({
    name: req.body.name,
    address: req.body.address,
    area: req.body.area,
    status: req.body.status,
    cuisine: req.body.cuisine,
    website: req.body.website,
    image: req.body.image
  })

  newEatery.save(function(err, createdEatery){
    if (err) {
    return res.redirect('/eateries/register')
    }
    res.redirect('/eateries/register')
  })
}

function show(req, res) {
    Eatery.findById(req.params.id, function(err, eatery) {
      if (err) {
        console.log(err)
        return
      }
      res.render('eateries/show', {
        eatery: eatery
      })
    })
  }

module.exports = {
  create,
  show
}
