const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const eaterySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Halal Certified', 'Muslim Owned'],
    required: true
  },
  // openingHours: [String],
  // type: {
  //   type: String,
  //   required: true
  // },
  cuisine: {
    type: String,
    required: true
  },
  // specialities: [String],
  // facilities: [String],
  // tel: {
  //   type: Number
  // },
  website: String,
  // reservation: {
  //   type: String
  // },
  // promotion: [String],
  image: String,
  dateCreated: {
    type: Date,
    default: Date.now
  },
  rating: [{
    type: Schema.Types.ObjectId,
    ref: 'Rating'
  }]
})

eaterySchema.plugin(uniqueValidator, {
  message: 'Eatery already exists'
})

const Eatery = mongoose.model('Eatery', eaterySchema)

module.exports = Eatery
