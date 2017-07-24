const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
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
  rating: [{
    type: Schema.Types.ObjectId,
    ref: 'Rating'
  }]
})

userSchema.pre('save', function (next) {
  var user = this
  if (!user.isModified('password')) return next()
  var hash = bcrypt.hashSync(user.password, 10)
  user.password = hash
  next()
})

const User = mongoose.model('User', userSchema)

module.exports = User
