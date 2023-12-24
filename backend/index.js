const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors')
const dotenv = require('dotenv');
const cookieParser = require("cookie-parser");
const authRouter = require('./routes/auth');
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');
const commentRoute = require('./routes/comments');

dotenv.config();


const connectDb = async () => {
    let retries = 3;
    while (retries > 0) {
        try {
            await mongoose.connect(process.env.MONGO_URL, {
                retryWrites: true
            });
            console.log("Database is connected");
            break; // Connection successful, exit loop
        } catch (err) {
            console.error("Error connecting to the database:", err);
            await new Promise(resolve => setTimeout(resolve, 5000)); // 5-second delay
        }
    }

    if (retries === 0) {
        console.error("Failed to connect to the database after multiple retries. Exiting...");
        process.exit(1);
    }
};


//middlewares

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:"http://localhost:5173", credentials:true}))
app.use('/api/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/posts', postRouter)
app.use('/api/comments', commentRoute);
console.log("hi");

app.listen(5000, ()=>{
    connectDb();
    console.log("app is running on port 5000");
})