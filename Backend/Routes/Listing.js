const {createlisting,deletelisting, editlisting, viewlisting,showalllisting, searchlisting,listingcat}=require("../Controllers/Listing");
const {islogedin}=require("../Middlewares/Authorization");
const express=require("express");
const router=express.Router();

router.post("/listings/view",viewlisting)
router.get("/listings",showalllisting);
router.post("/listingcat",listingcat);
router.post("/listing",islogedin,createlisting);
router.patch("/listing",islogedin,editlisting);
router.delete("/listing",islogedin,deletelisting);
router.post("/listing/search",searchlisting);


module.exports=router;