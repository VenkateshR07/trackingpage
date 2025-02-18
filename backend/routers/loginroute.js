const express = require("express")
const {postloginfun, forgetpasswordfun} = require("../controllers/logincontrol")
const { check } = require("express-validator");
const loginRouter = express.Router()


loginRouter.post("/login", [
    check('email', 'Enter a valid email').isEmail(),
    check('password', 'Password is required').exists(),
],postloginfun)
loginRouter.post("/forgetpassword",forgetpasswordfun)

module.exports = loginRouter