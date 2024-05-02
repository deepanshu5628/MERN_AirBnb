const express=require("express");
const {islogedin} =require("../Middlewares/Authorization")
const { signup,login, sendotp,changePassword} = require("../Controllers/AuthN");
const router=express.Router();

router.post("/sendotp",sendotp);
router.post("/signup",signup)
router.post("/login",login);
router.post("/changepassword",islogedin,changePassword);

module.exports=router;