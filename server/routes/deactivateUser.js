// const express = require('express');
// const router = express.Router();
// const { User } = require('../db');

// router.post('/deactivate_user/:id', async (req, res) => {
//   try {
//     const userId = req.params.id;
//     await User.findByIdAndUpdate(userId, { isActive: false }); // Assuming you have an isActive field
//     res.status(200).json({ message: 'User deactivated successfully' });
//   } catch (error) {
//     console.error('Error deactivating user:', error);
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// });

// module.exports = router;
const express = require('express');
const router = express.Router();
const { User } = require('../db');

router.delete('/deactivate_user/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;

