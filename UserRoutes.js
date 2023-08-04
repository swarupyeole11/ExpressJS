
const express = require("express")
const  loginUser  = require("./UserController")
const router = express.Router()

router.route("/login").post(loginUser).get((req,res)=>{
    res.json({
        about : "THis is a get request being sent"
    })
})

module.exports = router;