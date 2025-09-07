const express = require('express');
const router = express.Router();
const userModel = require('../models/users');

router.get('/', async (req, res) => {
    const profile = await userModel.findById(req.user.id);
    res.json({ username: profile.username, email: profile.email })
})


module.exports = router