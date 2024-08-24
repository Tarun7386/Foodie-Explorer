const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String ,required:true},
  password: {type:String,required:true},
});

const adminSchema = new mongoose.Schema({
  username: {type:String,required:true},
  password: {type:String,required:true}
});

const PlaceSchema =new mongoose.Schema({
  image:{ type:String, required:true},
  Place:{ type:String, required:true},
  FoodItem:{ type:String, required:true},
  Rating:{ type:Number,required:true}
});

const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  address: { type: String, required: true },
  description: String
});


const messageSchema = new mongoose.Schema({
  text: { type: String, required: true },
});








const User = mongoose.model("User", userSchema);
const Admin = mongoose.model("Admin", adminSchema);
const Places=mongoose.model("Places",PlaceSchema);
const Registrations = mongoose.model('Registrations', registrationSchema);
const Message = mongoose.model('Message', messageSchema);

module.exports = {
  User,
  Admin,
  Places,
  Registrations,
  Message,
 
};



