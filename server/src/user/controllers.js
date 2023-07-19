const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("./model");

async function register(req, res) {
    try {
        const { username, email, password } = req.body;

        const usernameUser = await User.findOne({ username });
        if (usernameUser) {
            return res
                .status(401)
                .json({ message: "Username already exists!" });
        }

        const emailUser = await User.findOne({ email });
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

        const token = jwt.sign({ id: user._id }, "your-secret-key", {
            expiresIn: "1d",
        });

        res.status(200).json({
            message: "Login successful!",
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Required fields are missing!" });
    }
}

async function me(req, res) {
    const userId = req.userId;
    const user = await User.findById(userId);
    if (!user) {
        return res.status(404).json({ message: "User not found!" });
    }
    return res.status(200).json({ message: "User info sent!", user });
}

async function isUsernameExist(req, res) {
    try {
        const username = req.query.username;
        if (!username)
            return res
                .status(400)
                .json({ message: "Username field is missing!" });

        const user = await User.findOne({ username });
        if (user) {
            return res
                .status(200)
                .json({ message: "Username found!", status: true });
        }

        res.status(404).json({ message: "Username not found!", status: false });
    } catch (error) {
        res.status(400).json({ message: "An error occured!", error });
    }
}

async function isEmailExist(req, res) {
    try {
        const email = req.query.email;
        if (!email) {
            return res.status(400).json({ message: "Email field is missing!" });
        }

        const user = await User.findOne({ email });
        if (user) {
            return res
                .status(200)
                .json({ message: "Email found!", status: true });
        }

        res.status(404).json({ message: "Email not found!", status: false });
    } catch (error) {
        res.status(400).json({ message: "An error occured!", error });
    }
}

module.exports = {
    register,
    login,
    me,
    isUsernameExist,
    isEmailExist,
};
