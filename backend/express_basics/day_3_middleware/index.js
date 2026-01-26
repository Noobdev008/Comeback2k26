const express = require('express');
const app= express();
const logger= require('./middleware/logger')
const errorHandler= require('./middleware/errorHandler')
const PORT = 3000;

app.use(express.json());
app.use(logger); // custom simple middleware 

let jsonData =require('./data.json');

app.get('/error',(req,res)=>{
    const err = new Error("Forced error for testing");
    err.statusCode = 500;
    next(err);
})

app.post('/login',(req,res,next)=>{
    let {email} = req.body

     if (!email) {
        const err = new Error("Email is required");
            err.statusCode = 400;
            return next(err);
        }
    
    let validUser = jsonData.find(x=>(x.email).toLowerCase()===(email).toLowerCase())

    if (!validUser) {
        const err = new Error("User Not found");
            err.statusCode = 404;
            return next(err);
        }
    res.json({
        message:"User Found",
        id:validUser.id,
        name:validUser.name,
        email:validUser.email
    })
    
});

app.use(errorHandler); // error handler middleware

app.listen(PORT,()=>{
    console.log(`Server runs on ${PORT}`);
})