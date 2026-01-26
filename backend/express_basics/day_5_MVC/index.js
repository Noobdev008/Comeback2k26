const express = require('express');
const app= express();
const logger= require('./middleware/logger');
const errorHandler= require('./middleware/errorHandler');
const authRoutes = require('./routes/auth.routes')
const PORT = 3000;

app.use(express.json());
app.use(logger); // custom simple middleware 

// routes
app.use('/api',authRoutes);

app.use(errorHandler); // error handler middleware

app.listen(PORT,()=>{
    console.log(`Server runs on ${PORT}`);
})