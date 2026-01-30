const express= require('express');
const app= express();
const connectDB = require("./config/db");
const authRoutes =  require('./routes/auth.routes');

const PORT= 3000;

connectDB();

app.use(express.json());

app.use('/api',authRoutes)

app.listen(PORT,()=>{
    console.log(`Server runs on ${PORT}`);
    
});