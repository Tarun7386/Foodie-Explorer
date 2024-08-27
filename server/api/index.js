const express=require('express');
const mongoose=require('mongoose');
const path=require('path');
const cors=require('cors');
require('dotenv').config();


const app = express();


const adminRouter=require('../routes/admin');
const userRouter=require('../routes/user');
const placeRouter=require('../routes/addplaces');
const registrationsRouter=require('../routes/registrations');
const deactivateRouter=require('../routes/deactivateUser')
const sendMessageRouter=require('../routes/message')



// "mongodb://localhost:27017/foodie_explorer" 
// mongodb://127.0.0.1:27020,127.0.0.1:27021,127.0.0.1:27022/cbitit1?replicaSet=m101';
mongoose.connect(process.env.MONGODB_URI , {
  })
    .then(() => {
      console.log('MongoDB connected');
    })
    .catch((error) => {
      console.error('MongoDB connection error:', error.message);
      process.exit(1); 
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.use("/admin", adminRouter)
app.use("/user", userRouter)
app.use("/addplaces",placeRouter)
app.use("/registrations",registrationsRouter)
app.use('/deactivateUser',deactivateRouter)
app.use('/message',sendMessageRouter)

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'src')));

app.listen(3000,function(){
  console.log('Server started on port 3000');
})

