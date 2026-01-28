const User = require('../model/user.model');

const addUser = async (req, res) => {
    try {
        const { name, email, age, role, isActive } = req.body;

        // Validation
        if (!name || !email) {
            return res.status(400).json({
                message: "Name and Email are required"
            });
        }

        // Check if email already exists
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(409).json({
                message: "Email already registered"
            });
        }

        // Create user
        const createdUser = await User.create({
            name,
            email,
            age,
            role,
            isActive
        });

        return res.status(201).json({
            message: "User created successfully",
            user: createdUser
        });

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const findOne = async (req, res) => {
    try {
        const {  email } = req.body;

        if(!email){
            return res.status(403).json({
                message:"Email Required"
            })
        }
        // Check if email already exists
        const findOneEmail = await User.findOne({ email });
        const {name,role}= findOneEmail;
        if(!findOneEmail){
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({
            message: "User Details fetch successfully",
            user: {
                name,email,role
            }
        });

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
};

const findAll = async(req,res)=>{
    try{
         const findUserDetails = await User.find({},"name email role");
        //  let output = findUserDetails.map(x=>({
        //         name:x.name,
        //         email:x.email,
        //         role:x.role
        //  }));
        return res.status(200).json({
            message: "User Details fetch successfully",
            output:findUserDetails
        });
    }catch(err){
         console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const updateUser =  async(req,res)=>{
    try{

        const findUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new:true, runValidators:true}
        );

        if(!findUser){
            return res.status(404).json({
                message: "User Not Found!!",
            });
        }

        return res.status(200).json({
            message: "User updated successfully",
            user:findUser
        });

    }catch(err){
         console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const deleteUser =  async(req,res)=>{
    try{

        const findUser = await User.findByIdAndDelete(
            req.params.id
        );

        if(!findUser){
            return res.status(404).json({
                message: "User Not Found!!",
            });
        }

        return res.status(200).json({
            message: "User delete successfully",
            user:findUser
        });

    }catch(err){
         console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

const searchUser = async(req,res)=>{
    try{
        
         const findUserDetails = await User.find({},"name email role");
        return res.status(200).json({
            message: "User Details fetch successfully",
            output:findUserDetails
        });
    }catch(err){
         console.error(err.message);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

module.exports = { addUser,findOne,findAll,updateUser,deleteUser };
