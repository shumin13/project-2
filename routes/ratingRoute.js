const express = require('express')
const router = express.Router()
const ratingsController = require('../controllers/ratings_controller')

function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next()
  req.flash('errorMessage', 'Login to access!')
  res.redirect('/users/login')
}

router.get('/:id', authenticatedUser, ratingsController.show)

router.post('/:id', ratingsController.create)

module.exports = router
