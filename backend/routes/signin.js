const express = require('express');
const router = express.Router();
const userModel = require('../models/users');
const bcrypt = require('bcrypt');

router.post('/', async(req,res)=>{
    const {email,username,password} = req.body;
    if(!username || !password || !email){
        return res.status(400).json("All fields are required");
    }
    const existingUser = await userModel.findOne({username});
    if(existingUser) return res.status(409).json("Username already exists. Please enter an unique username");

    const hashedPass = await bcrypt.hash(password,10);
    await userModel.create({
        email,
        username,
        password:hashedPass,
    });

    return res.status(200).json("User successfully created");
})

module.exports = router;