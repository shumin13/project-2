const mongoose = require('mongoose')
const Schema = mongoose.Schema

const eaterySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  openingHours: [String],
  status: {
    type: String,
    enum: ['Halal Certified', 'Muslim Owned'],
    required: true
  },
  type: {
    type: String,
    required: true
  },
  cuisine: [String],
  specialities: [String],
  facilities: [String],
  tel: {
    type: Number
  },
  website: [String],
  reservation: {
    type: String
  },
  promotion: [String],
  dateCreated: {
    type: Date,
    default: Date.now
  },
  rating: [{
    type: Schema.Types.ObjectId,
    ref: 'Rating'
  }]
})

const Eatery = mongoose.model('Eatery', eaterySchema)

module.exports = Eatery
