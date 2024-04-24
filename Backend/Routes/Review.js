const express=require("express");
const {createReview,deletereview,getreview} =require("../Controllers/Review");
const { islogedin } = require("../Middlewares/Authorization");
const router=express.Router();

router.post("/create",islogedin,createReview);
router.delete("/delete",islogedin,deletereview);
router.get("/getrev/:listingId",getreview);

module.exports=router;