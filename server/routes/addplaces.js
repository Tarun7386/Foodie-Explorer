const express = require('express');
const router = express.Router();
const{Places} = require('../db');

router.post('/add_places',async(req,res)=>{
    try{
        const{image,Place,FoodItem,Rating}=req.body;
        const newPlace=new Places({
            image,Place,FoodItem,Rating
        });
        await newPlace.save();
        res.status(200).json({message:'successfully created'});

    }
    catch(error){
        res.status(500).json({message:'Error adding place',error:error.message});
    }
})
router.get('/admin_Home_cusines',async(req,res)=>{
    try{
        const cusines=await Places.find();
        res.status(200).json(cusines);

    }catch(error){
        console.error(error);
        res.status(500).json({message:'Error retrieving',error:error.message});
    }
});
router.get('/user_cusines',async (req,res) => {
    try{
    const query = req.query.q;
    const regex = new RegExp(query, 'i');

    // Search in both Place and FoodItem fields
    const results = await Places.find({
      $or: [
        { Place: { $regex: regex } },
        { FoodItem: { $regex: regex } }
      ]
    });

    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error', error: error.message });
  }
});
    





module.exports=router;