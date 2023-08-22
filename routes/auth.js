const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Imports the User model

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Create a new user in the database
    const newUser = new User({ name, email, password });
    await newUser.save();

    // Create a JWT token
    const token = jwt.sign({ userId: newUser._id }, 'your-secret-key', { expiresIn: '1h' });

    res.status(201).json({ message: 'User created', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
