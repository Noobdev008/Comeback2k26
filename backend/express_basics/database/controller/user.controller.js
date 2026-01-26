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

module.exports = { addUser };
