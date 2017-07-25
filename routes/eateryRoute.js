const express = require('express')
const router = express.Router()
const eateriesController = require('../controllers/eateries_controller')

router.get('/register', function (req, res) {
  res.render('eateries/register')
})

router.post('/register', eateriesController.create)

router.get('/:id', eateriesController.show)

module.exports = router
