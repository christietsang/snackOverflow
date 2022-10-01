const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/register", authController.registerUser);
router.post("/signin", authController.signInUser);

module.exports = router;