const {findUserEmail}= require('../model/user.modal')
const login = (req,res,next)=>{
    let {email} = req.body

     if (!email) {
        const err = new Error("Email is required");
            err.statusCode = 400;
            return next(err);
        }
    
    let validUser = findUserEmail(email);

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
    
}

const error =(req,res,next)=>{
    const err = new Error("Forced error for testing");
    err.statusCode = 500;
    next(err);
}

module.exports= {login,error}