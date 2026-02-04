const express= require('express');
const app= express();
const cors = require('cors');
const connectDB = require("./config/db");
const authRoutes =  require('./routes/auth.routes');
require('dotenv').config();
const PORT= process.env.PORT;

connectDB();

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use('/api',authRoutes);

app.listen(PORT,()=>{
    console.log(`Server runs on ${PORT}`); 
});