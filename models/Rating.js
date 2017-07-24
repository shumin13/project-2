const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: false
  },
  eatery: [{
    type: Schema.Types.ObjectId,
    ref: 'Eatery'
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'Rating'
  }]
})

const User = mongoose.model('Rating', ratingSchema)

module.exports = Rating
