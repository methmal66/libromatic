const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const authenticateUser = require("../middlewares/authenticateUser");
const authenticateDeveloper = require("../middlewares/authenticateDeveloper");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/me", authenticateUser, userController.me);
router.get(
    "/isUsernameExist",
    authenticateDeveloper,
    userController.isUsernameExist
);
router.get("/isEmailExist", authenticateDeveloper, userController.isEmailExist);

module.exports = router;
