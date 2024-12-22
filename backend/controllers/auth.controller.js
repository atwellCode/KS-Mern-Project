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
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid Username or Password!!!" });
    }

    generateTokenAndSetCookie(user._id, res);
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      bios: user.bios,
      link: user.link,
      username: user.username,
      password: user.password,
      followers: user.followers,
      following: user.following,
      profileImg: user.profileImg,
      coverImg: user.coverImg,
    });
  } catch (error) {
    console.error("Error in Login Controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "You logout successfully!!!" });
  } catch (error) {
    console.error("Error in Log-Out Controller:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
const getMe = async (req, res) => {
    try {
      const user = await User.findById(req.user._id).select("-password");
      res.status(200).json(user);
    } catch (error) {
      console.error("Error in getMe Controller:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
module.exports = { signup, login, logout, getMe };
