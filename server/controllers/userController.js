const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

async function register(req, res) {
    try {
        const { username, email, password } = req.body;

        const usernameUser = await User.find({ username });
        if (usernameUser) {
            return res
                .status(401)
                .json({ message: "Username already exists!" });
        }

        const emailUser = await User.find({ email });
        if (emailUser) {
            return res.status(401).json({ message: "Email already exists!" });
        }

        const hashdPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            email,
            password: hashdPassword,
            profilePicture: "",
        });
        newUser.save();

        res.status(201).json({
            message: "Account created successfully!",
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            message: "Required fields are missing!",
        });
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        const isMatch = await bcrypt.compare(password, user.password);

        if (!user) {
            return res
                .status(401)
                .json({ message: "Invalid email or password!" });
        }

        if (!isMatch) {
            return res
                .status(401)
                .json({ message: "Invalid email or password!" });
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email },
            "your-secret-key",
            { expiresIn: "1d" }
        );

        res.status(200).json({ message: "Login successful!", token, user });
    } catch (error) {
        res.status(400).json({ message: "Required fields are missing!" });
    }
}

async function findByUsername(req, res) {
    try {
        const username = req.query.username;
        const user = await User.findOne({ username });
        if (user) {
            return res.status(200).json({ message: "User found!", user });
        }
        res.status(404).json({ message: "User not found!" });
    } catch (error) {
        res.status(400).json({ message: "Username field is missing!" });
    }
}

async function findByEmail(req, res) {
    try {
        const email = req.query.email;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(200).json({ message: "User found!", user });
        }
        res.status(404).json({ message: "User not found!" });
    } catch (error) {
        res.status(400).json({ message: "Email field is missing!" });
    }
}

module.exports = {
    register,
    login,
    findByUsername,
    findByEmail,
};
