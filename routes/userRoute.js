const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users_controller')
const passport = require('../config/ppConfig')

router.get('/register', function (req, res) {
  res.render('users/register', {
    message: req.flash('error')
  })
})

router.get('/login', function (req, res) {
  res.render('users/login', {
    message: req.flash('error')
  })
})

router.get('/profile', function (req, res) {
  res.render('users/profile', {
    user: req.user
  })
})

router.get('/logout', function (req, res) {
  req.logout()
  res.redirect('/')
})

router.post('/register', usersController.create)

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/login',
    failureFlash: true
  })
)

module.exports = router
