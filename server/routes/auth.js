const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

// LOGIN

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).json({ message: 'User not found' });

    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password_hash);
    if (!isPasswordCorrect)
      return res.status(400).json({ message: 'Invalid credentials' });

    console.log(existingUser._id)

    const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET, { expiresIn: '1d' });

    res.status(200).json({
      message: "Login successful",
      token,
      userId: existingUser._id,
     
    });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
