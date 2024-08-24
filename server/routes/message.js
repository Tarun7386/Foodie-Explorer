const express = require('express');
const router = express.Router();
const { Message } = require('../db'); // Ensure you have a Message model


router.post('/send_message', async (req, res) => {
  try {
    const { message } = req.body;
  
    let existingMessage = await Message.findOne();
    
    if (existingMessage) {
     
      existingMessage.text = message;
      await existingMessage.save();
    } else {
      
      const newMessage = new Message({ text: message });
      await newMessage.save();
    }

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
router.get('/latest_message', async (req, res) => {
    try {
      const message = await Message.findOne().sort({ _id: -1 }); 
      if (!message) {
        return res.status(404).json({ message: 'No messages found' });
      }
      res.status(200).json(message);
    } catch (error) {
      console.error('Error fetching message:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  });

module.exports = router;
