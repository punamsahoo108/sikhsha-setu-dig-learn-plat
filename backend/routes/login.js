require('dotenv').config();
const express = require('express');
const router = express.Router();
const userModel = require('../models/users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const secretKey = process.env.AUTHPASS_JWT;

router.post('/', async (req,res)=>{
    const {username, password} = req.body;
    if(!username || !password) return res.status(400).json({msg:"Username or Password not found"});

    const user = await userModel.findOne({username});
    if(!user) return res.status(401).json({msg:"Invalid username or password"});

    const isMatch = await bcrypt.compare(password,user.password);
    if(!isMatch) return res.status(401).json({msg:"Invalid username or password"});

    const token = jwt.sign({username, id:user._id}, secretKey, {expiresIn:'1h'});

    res.cookie('token', token, {
        httpOnly: true,
        secure: false,   
        sameSite: 'lax'
    });
    

    res.status(200).json({msg:"User logged in successfully"});
})

module.exports = router;