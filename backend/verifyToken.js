// const jwt = require("jsonwebtoken");

// const verifyToken = (req,res,next) =>{
//     const token = req.cookies.token
//     if(!token){
//         return res.status(401).json("you are not authenticated");
//     }

//     jwt.verify(token, process.env.SECRET, async(err,data) =>{
//         if(err){
//             return res.status(403).json("token is not valid");
//         }

//         req.userId= data._id;
//         console.log("passed");
//         next()
//     })
// }

// module.exports= verifyToken;


const jwt=require('jsonwebtoken')

const verifyToken=(req,res,next)=>{
    const token=req.cookies.jwttoken
   
    if(!token){
        return res.status(401).json("You are not authenticated!")
    }
    jwt.verify(token,process.env.SECRET,async (err,data)=>{
        if(err){
            return res.status(403).json("Token is not valid!")
        }
        
        req.userId=data._id
       
        // console.log("passed")
        
        next()
    })
}

module.exports=verifyToken