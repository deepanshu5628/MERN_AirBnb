const {createlisting,deletelisting, editlisting, showalllisting, listingcat}=require("../Controllers/Listing");
const {islogedin}=require("../Middlewares/Authorization");
const express=require("express");
const router=express.Router();

router.get("/listings",showalllisting);
router.post("/listingcat",listingcat);
router.post("/listing",islogedin,createlisting);
router.patch("/listing",islogedin,editlisting);
router.delete("/listing",islogedin,deletelisting);

module.exports=router;