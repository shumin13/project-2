const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users_controller')
const passport = require('../config/ppConfig')

router.get('/register', function(req, res) {
  res.render('users/register')
})

router.get('/login', function(req, res) {
  res.render('users/login')
})

router.get('/profile', function(req, res) {
  res.render('users/profile', {
    user: req.user
  })
})

router.get('/logout', function(req, res) {
  req.logout()
  console.log('logged out')
  res.redirect('/')
})

router.post('/register', usersController.create)

// router.get('/:id', usersController.show)

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/users/profile',
    failureRedirect: '/users/login',
    failureFlash: true
  })
) 

module.exports = router
