import express from 'express';
import mongoose from 'mongoose';
import User from './models/user.model.js';

const app = express();

mongoose.connect('mongodb://localhost:27017/testDB')
.then(()=>{
    console.log('DB Connected!')
}).catch((e)=>{
    console.log(`Error : ${e}`)
})


app.get('/', async (req,res)=>{
   const newUser = new User({
    name:'Huzaifa',
    email:"alikhanhuzaifa@gmail.com",
    password: 'Abcd$1234'
   })
   const savedUser = await newUser.save();
   return {
    message: "User added successfully!",
    user: savedUser
   }
})

app.listen(4000,()=>{
    console.log(`Server is listening bro!`)
})

