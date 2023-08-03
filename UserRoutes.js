
const express = require("express")
const  loginUser  = require("./UserController")
const router = express.Router()

router.route("/api/v1/login").post(loginUser)

module.exports = router;