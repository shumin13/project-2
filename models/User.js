const mongoose = require('mongoose')
const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator')

const bcrypt = require('bcrypt')

var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    maxlength: [99, 'Name must be less than 99 characters']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: emailRegex
  },
  password: {
    type: String,
    required: true,
    maxlength: [99, 'Password must be less than 99 characters']
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
  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) return next(err)
    user.password = hash
    next()
  })
})

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password)
}

userSchema.plugin(uniqueValidator, {
  message: 'Email already exists.'
})

const User = mongoose.model('User', userSchema)

module.exports = User
