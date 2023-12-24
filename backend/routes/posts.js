const express = require('express');
const router = express.Router();
const bcrypt= require('bcrypt');
const User = require('../models/User');
const Post = require('../models/Post');
const Comment = require('../models/Comment');
const verifyToken = require('../verifyToken');


//CREATE

router.post("/create", verifyToken, async(req,res) =>{
    try{
        const newPost = new Post(req.body);
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }
    catch(err){
        console.error(err);
        res.status(500).json(err);
    }
})


//UPDATE

router.put('/:id', verifyToken,async(req,res) =>{
    try {
        

        const updatedPost = await Post.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true});
        res.status(200).json(updatedPost);

    }

    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

//DELETE


router.delete('/:id', verifyToken, async(req,res) =>{
    try {
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json("post has been deleted");
    }

    catch(err){
        console.log(err);
        res.status(500).json(err);
    }
})

//GET POST DETAILd
router.get("/:id", async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.status(200).json(post); // Send only the 'info' object
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

//GET ALL POSTS

router.get("/", async (req, res) => {
    try {
        const post = await Post.find();
        res.status(200).json(post); // Send only the 'info' object
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});


//GET USER POSTS

router.get("/user/:userId",  async (req, res) => {
    try {
        const posts = await Post.find({userId: req.params.userId});
        res.status(200).json(posts); // Send only the 'info' object
    } catch (err) {
        console.error(err);
        res.status(500).json(err);
    }
});

//SEARCH POSTS

router.get("/search/:prompt", async(req,res) =>{
    try{
        // 
        const searchPrompt = req.params.prompt;
        const searchFilter = {
            title: { $regex: new RegExp(searchPrompt, 'i') } // 'i' for case-insensitive
        };
        const posts = await Post.find(searchFilter);
        res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json(err);
    }
})



module.exports = router;
