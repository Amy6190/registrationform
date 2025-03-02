const express = require('express');
const router = express.Router();
const User = require('../models/authModel')
const becrypt = require('bcryptjs')
const JWT_SECRET = "hum_to_doobe_hai"; // Change this in production
const jwt = require('jsonwebtoken');
const { authMiddleware } = require('../middleware/authMiddleware');
router.get('/',async (req,res)=>{
    const data = await User.find();
    res.json(data)
})

router.post('/register',async (req, res)=>{
    const {name, email ,password} = req.body;
    const existinguser = await User.find({
        email: email
    });
    if (existinguser.length >0){
        res.send("User already registered")
    }
    let hash =await becrypt.hash(password, 10)
    console.log(hash);
    const newUser = new User({
        email: email,
        password: hash,
        name: name
    })
    await newUser.save();
    res.send(newUser)
})

router.post('/login',async (req,res)=>{
    const {password, email} = req.body;
    const user = await User.find({
        email : email
    })
    const userdetail = user[0]
    if (user.length==0){
        res.send("User not exist")
    }
    console.log(password,user);
    const comparepassword =await becrypt.compare(password,user[0].password)
    console.log(comparepassword);
    if (!comparepassword) {
        res.send("Wrong password");
    }
    const token = jwt.sign({userId:userdetail._id, email:userdetail.email},JWT_SECRET,{expiresIn:'24h'})
    res.send({
        token:token, user : {name:userdetail.name , email:userdetail.email}
    })
})

router.get('/dashboard',authMiddleware,(req,res)=>{
    res.send("dashboard")
})

module.exports = router