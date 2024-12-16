const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");
const { generateTokenAndSetCookie } = require("../lib/utils/generateToken.js");

const signup = async (req, res) => {
    try {
        const { name, username, email, password } = req.body;

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "Invalid Email Address!" });
        }

        // Check if username already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: "Username is already taken!" });
        }

        // Check if email already exists
        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "Email is already registered!" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user instance
        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword,
        });

        // Save the new user to the database
        await newUser.save();

        // Generate token and set it in cookies
        generateTokenAndSetCookie(newUser._id, res);

        // Send a success response
        res.status(201).json({ message: "User created successfully!" });
    } catch (error) {
        console.error("Error in signup controller:", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const login = async (req, res) =>{
    res.json({
        data:"You hits the Log-In endpoint",
    })
}
const logout = async (req, res) =>{
    res.json({
        data:"You hits the Log-Out endpoint",
    })
}
module.exports = { signup, login, logout };
