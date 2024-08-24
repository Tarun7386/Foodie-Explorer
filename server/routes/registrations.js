const express = require('express');
const router = express.Router();
const {Registrations} = require('../db');

router.post('/user_register',async(req,res)=>{
    try{
        const{name,email,mobile,address,description}=req.body;
        const collect_r=new Registrations({
            name,email,mobile,address,description
        });
        await collect_r.save();
        res.status(200).json({message:'successfully stored data'});

    }
    catch(error){
        res.status(500).json({message:'Error adding place',error:error.message});
    }
})
router.get('/collect_registrations', async (req, res) => {
    try {
      const collect_re = await Registrations.find();
      res.json(collect_re);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });
module.exports=router;