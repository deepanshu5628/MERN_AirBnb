const {createlisting,deletelisting, editlisting}=require("../Controllers/Listing");
const {islogedin}=require("../Middlewares/Authorization");
const express=require("express");
const router=express.Router();

router.post("/listing",islogedin,createlisting);
router.delete("/listing",islogedin,deletelisting);
router.patch("/listing",islogedin,editlisting);

module.exports=router;