// server/routes/admin.js
const express = require('express');
const router = express.Router();
const{Admin} = require('../db');


router.get('/admin_details', async (req, res) => {
  try {
    // Fetch admin details from the database
    const admins = await Admin.find();
    
    
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching admin details', error: error.message });
  }
});
router.post('/admin_details', async (req, res) => {
    const { username, password } = req.body; 
    
    
  
    try {
      // Find user with matching username and password
      const user = await Admin.findOne({ username, password });
     
      if (user) {
        
        res.json({ message: 'Logged in successfully' });
        
      } else {
        res.status(403).json({ message: 'Invalid username or password' });
      }
    } catch (error) {
      
      res.status(500).json({ message: 'Server error', error });
    }
  });
module.exports = router;
