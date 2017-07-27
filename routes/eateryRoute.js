const express = require('express')
const router = express.Router()
const eateriesController = require('../controllers/eateries_controller')

function authenticatedUser(req, res, next) {
  if (req.isAuthenticated()) return next()
  req.flash('errorMessage', 'Login to access!')
  res.redirect('/users/login')
}

router.get('/', eateriesController.list)

router.get('/eateries/register', authenticatedUser, function (req, res) {
  res.render('eateries/register')
})

router.post('/eateries/register', eateriesController.create)

router.get('/eateries/:id', authenticatedUser, eateriesController.show)

module.exports = router
