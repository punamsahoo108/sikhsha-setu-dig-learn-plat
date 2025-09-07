const jwt = require('jsonwebtoken');
const secretKey = process.env.AUTHPASS_JWT;

const authmiddleware = (req,res,next) => {
    const token = req.cookies?.token;
    if(!token) return res.status(401).json('token not found');

    jwt.verify(token,secretKey,(err,user)=>{
        if(err) return res.status(403).json('Token denied. Please Login.');
        req.user = user;
        next();
    })
}

module.exports = authmiddleware;