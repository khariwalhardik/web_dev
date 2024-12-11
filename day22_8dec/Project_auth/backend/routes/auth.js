const express = require('express');
const otpGenerator = require('otp-generator');
const User = require('../models/User');

const router = express.Router();

// Sign-up
router.post('/signup', async (req, res) => {
  const { fullName, email, mobile, userType } = req.body;
  try {
    const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
    const user = await User.create({ fullName, email, mobile, userType, otp });
    res.json({ message: 'OTP sent successfully', userId: user._id });
  } catch (err) {
    res.status(400).json({ message: 'User already exists or error occurred' });
  }
});

// Verify OTP
router.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  try {
    const user = await User.findOne({ email });
    if (user && user.otp === otp) {
      user.isVerified = true;
      user.otp = null;
      await user.save();
      res.json({ message: 'Verification successful', token: 'mock-jwt-token' });
    } else {
      res.status(400).json({ message: 'Invalid OTP' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error verifying OTP' });
  }
});

module.exports = router;
