const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    comment:{
        type:String,
        reuired:true
    },
    author:{
        type:String,
        required:true
    },
    postId:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        required:true
    }
}, {timestamps:true});

module.exports = mongoose.model("comment", CommentSchema);