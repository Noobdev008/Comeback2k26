const express= require('express');
const app= express();
const connectDB = require("./config/db");
const authRoutes =  require('./routes/auth.routes');
require('dotenv').config()
const PORT= process.env.PORT;

connectDB();

app.use(express.json());

app.use('/api',authRoutes)

app.listen(PORT,()=>{
    console.log(`Server runs on ${PORT}`);
    
});