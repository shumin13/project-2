const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users_controller')

router.get('/register', function (req, res) {
  res.render('users/register')
})

router.post('/register', usersController.create)

// router.get('/:id', usersController.show)

module.exports = router
