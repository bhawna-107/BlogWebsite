const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv');

const connectDb = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("database is connected");
    }
    catch(err){
        console.log(err);
    }
}

//middlewares

dotenv.config();

console.log("hi");

app.listen(5000, ()=>{
    connectDb();
    console.log("app is running on port 5000");
})