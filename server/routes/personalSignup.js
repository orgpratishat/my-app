const express = require('express');
const bcrypt = require('bcryptjs'); 
const jwt = require('jsonwebtoken');
const router = express.Router();
const User = require('../models/User.js'); 

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

router.post('/personal-signup', async (req, res) => {
  try {
    const { name, dob, gender, nationality, state, interests, profession, experience, email, password,profilePicture } = req.body;

    if (!name || !dob || !gender || !nationality || !state || !profession || !experience || !password || !email || !profilePicture) {
      return res.status(400).json({ message: 'Please fill all the required fields.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    

    const newUserInfo = new User({ 
      userName: name, 
      dob,
      email,
      gender,
      nationality,
      state,
      interests,
      profession,
      experience,
      password_hash: hashedPassword,
      profile_image_url:profilePicture,
    });

    await newUserInfo.save();

    const token = jwt.sign({ userId: newUserInfo._id }, JWT_SECRET, { expiresIn: '1d' });

    res.status(201).json({ 
      message: 'Signup successful!',
      token,
      userId: newUserInfo._id
    });
  } catch (error) {
    console.error('Error saving personal info:', error);
    res.status(500).json({ message: 'Server error, please try again later.' });
  }
});

module.exports = router;
