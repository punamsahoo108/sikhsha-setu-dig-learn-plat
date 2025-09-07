const mongoose = require('mongoose');

const connectDb = async () =>{
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/DigiPathshala');
        console.log('mongo connected');
    }
    catch(err){
        console.error(err.message);
    }
}

module.exports = connectDb;