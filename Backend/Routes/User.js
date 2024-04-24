const express=require("express");
const { signup,login, sendotp} = require("../Controllers/AuthN");
const router=express.Router();

router.post("/sendotp",sendotp);
router.post("/signup",signup)
router.post("/login",login);

module.exports=router;