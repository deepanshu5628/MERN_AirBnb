const {createlisting}=require("../Controllers/Listing");
const {islogedin}=require("../Middlewares/Authorization");
const express=require("express");
const router=express.Router();

router.post("/createlisting",islogedin,createlisting);

module.exports=router;