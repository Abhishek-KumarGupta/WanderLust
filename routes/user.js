const express = require("express")
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirecturl } = require("../middleware.js")
const userController = require("../controllers/users.js")

//Signup
router.route("/signup")
.get( userController.rendersignupForm)
.post( wrapAsync(userController.signup));

//login
router.route("/login")
.get( userController.renderLoginform)
.post( saveRedirecturl, passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}), userController.login);


router.get("/logout", userController.logout)
module.exports = router;


//router.get("/signup", userController.rendersignupForm);

//router.post("/signup", wrapAsync(userController.signup));

//router.get("/login", userController.renderLoginform)

//router.post("/login", saveRedirecturl, passport.authenticate("local", {failureRedirect: '/login', failureFlash: true}), userController.login);

