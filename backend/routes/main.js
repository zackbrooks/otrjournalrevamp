const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const auth = require("../middleware/auth");

router.get("/me", auth, authController.currentUser);
router.post("/login", authController.postLogin);
router.post("/signup", authController.postSignup);
module.exports = router;
