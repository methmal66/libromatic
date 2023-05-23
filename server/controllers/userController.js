const bcrypt = require("bcrypt");
const User = require("../models/userModel");

//TODO - Check if users are added successfully
async function registerUser(req, res) {
  try {
    // Extract user data from the request body
    console.log(req.body);
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    // Validate the user input (e.g., check for required fields, password strength, etc.)

    // Create a new user instance
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Send a response indicating successful registration
    res
      .status(201)
      .json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    // Handle any errors that occur during registration
    console.log(error);
    res.status(500).json({ error: "An error occurred during registration" });
  }
}

module.exports = {
  registerUser,
};
