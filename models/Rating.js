const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ratingSchema = new Schema({
  ambience: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  food: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  location: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  service: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  valueForMoney: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  overall: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  dateOfVisit: {
    type: Date
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

const Rating = mongoose.model('Rating', ratingSchema)

module.exports = Rating
