//import packages
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

//Routes
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';



import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';


const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());  //to parse the incoming req with json payload(from req.body)
app.use(cookieParser());

// routes
app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);




// app.get("/",(req,res)=>{
//     res.send("Hello World!!");
// });

server.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`);
});