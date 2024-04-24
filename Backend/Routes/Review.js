const express=require("express");
const {createReview,deletereview} =require("../Controllers/Review");
const { islogedin } = require("../Middlewares/Authorization");
const router=express.Router();

router.post("/create",islogedin,createReview);
router.delete("/delete",islogedin,deletereview);

module.exports=router;