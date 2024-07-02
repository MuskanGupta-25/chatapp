import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send("Hello World!!");
});

// routes
app.use("/api/auth",authRoutes)

app.listen(PORT,()=>console.log(`Server Running on port ${PORT}`));