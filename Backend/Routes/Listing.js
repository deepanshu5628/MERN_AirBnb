const {createlisting,deletelisting}=require("../Controllers/Listing");
const {islogedin}=require("../Middlewares/Authorization");
const express=require("express");
const router=express.Router();

router.post("/createlisting",islogedin,createlisting);
router.delete("/deletelisting",islogedin,deletelisting);

module.exports=router;