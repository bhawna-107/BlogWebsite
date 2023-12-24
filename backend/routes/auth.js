const express = require("express");
const app = express();
const router = express.Router();
const User = require('../models/User');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');


//Register

router.post("/register", async(req,res)=>{
    try{
        const {username,email,password} = req.body;
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hashSync(password,salt);
        const newUser = new User({username,email,password:hashedPassword})
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    }
    catch(err){
        console.error("Error during registration:", err.message);
        res.status(500).json(err);
    }
})

//login 

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });

        if (!user) {
            return res.status(404).json("User not found");
        }

        const validPass = await bcrypt.compare(req.body.password, user.password);

        if (!validPass) {
            return res.status(401).json("Wrong credentials");
        }

        const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: "3d" });

        // Omit the password field from the response
        const { password, ...info } = user._doc;

        // Set the JWT token as a cookie with an expiration time
        res.cookie("jwttoken", token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 });

        // Send the user information in the response
        res.status(200).json(info);
    } catch (err) {
        console.error("Login Error: ", err);

        // Ensure only one response is sent
        if (!res.headersSent) {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
});

//logout

router.get("/logout", async(req,res) =>{
    try{
        res.clearCookie("jwttoken", {sameSite:"none", secure:true}).status(200).send("User logged out successfully");

    }
    catch(err){
        console.log(err);
        res.status(500).json(err);

    }
})


// router.post("/login", async(req,res) =>{
//     try{
//         const user = await User.findOne({email:req.body.email})
//         console.log("User:", user);
//         if(!user){
//             return res.status(404).json("user not found");
//         }
//         const validPass = await bcrypt.compare(req.body.password, user.password)
//         if(!validPass){
//             return res.status(401).json("Wrong credentials");
//         }
//         res.status(200).json(user);

//         const token = jwt.sign({id:user._id}, process.env.SECRET);
//         const {password, ...info} = user._doc;
//         res.cookie("jwttoken", token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000 });
//         res.status(200).json(info);

//         // res.cookie("jwttoken", token).status(200).json(info);

//     }
//     catch(err){

//         console.log("Login Error: ", err);
//         // if (!res.headersSent) {
//         //     res.status(500).json({ error: "Internal Server Error" });
//         // }
//     }
// })

module.exports = router;