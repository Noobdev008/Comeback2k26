const User = require('../model/user.model');
const bycrpt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req,res,next)=>{
    try{

        let {email,name,password}= req.body
        if(!email || !name || !password){
            return res.status(404).json({
                message:"All fields required!!"
            });
        };

        const hashedPassword = await bycrpt.hash(password,+process.env.SALT);
        const signUpUser = await User.create({
            name,email,password:hashedPassword
        });

        return res.status(201).json({
            message:"User Registerd"
        });

    }catch(err){
        console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const loginUser = async (req,res,next)=>{
    try{
console.log("test");

        let {email,password}= req.body
        if(!email || !password){
            return res.status(404).json({
                message:"All fields required!!"
            });
        };

        let findUser = await User.findOne({email}).select("+password");
        console.log(findUser.role, "  find user");
        
         if (!findUser) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        let decryptedPassword = bycrpt.compare(password,findUser.password);

        if(!decryptedPassword) {return res.status(401).json({ message: "Invalid credentials" });}

        const token = jwt.sign({
            id:findUser._id,
            role:findUser.role,
        },
       process.env.JWT_SECRET,
       {expiresIn:"7d"}
    )

        return res.status(201).json({
            message:"User Login",
            token
        });

    }catch(err){
        console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports={registerUser,loginUser}