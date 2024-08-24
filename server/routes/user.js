const express = require('express');
const router = express.Router();
const {User} = require('../db');
// const bcrypt=require('bcrypt');

router.post('/sign_up', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(403).json({ message: 'User already exists' });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
 
    res.status(200).json({ message: 'Sucessfully created' });
  }
});

router.post('/sign_in', async (req, res) => {
  const { username, password } = req.body; 

  try {
    
    const user = await User.findOne({ username, password });

    if (user) {
      res.json({ message: 'Logged in successfully' });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

router.get('/users_list', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Server error' });
  }
});
module.exports = router;

