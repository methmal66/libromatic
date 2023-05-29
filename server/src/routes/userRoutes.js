const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticate = require("../middlewares/authenticate");

// Route for user registration
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/me", authenticate, userController.me);
router.get("/findByUsername", userController.findByUsername);
router.get("/findByEmail", userController.findByEmail);

module.exports = router;
