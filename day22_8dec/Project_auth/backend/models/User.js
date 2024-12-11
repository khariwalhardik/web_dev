const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, unique: true },
  mobile: String,
  userType: String,
  otp: String,
  isVerified: { type: Boolean, default: false },
});

module.exports = mongoose.model('User', userSchema);
