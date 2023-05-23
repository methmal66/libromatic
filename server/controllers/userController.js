const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

async function register(req, res) {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;

        const newUser = new User({
            username,
            email,
            password,
        });
        const savedUser = await newUser.save();

        res.status(201).json({
            message: "User registered successfully",
            user: savedUser,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "An error occurred during registration",
        });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid email or password" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            "your-secret-key",
            { expiresIn: "1d" }
        );
        res.cookie("libromatic_access_token", token, {
            maxAge: 86400000,
            httpOnly: true,
        });
        res.status(200).json({ message: "Login successful" });
    } catch (error) {
        res.status(500).json({ error: "An error occurred during login" });
    }
}

module.exports = {
    register,
    login,
};
