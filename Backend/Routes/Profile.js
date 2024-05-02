const express=require("express");
const router=express.Router();

const {islogedin}=require("../Middlewares/Authorization");
const {updateProfile,deleteAccount,updateDp,getAllUserDetails}=require("../Controllers/Profile");

// -----------------------------------------------------Profile Route -------------------------------------------------------------------
router.post("/updateProfile",islogedin,updateProfile);
router.post("/updatedp",islogedin,updateDp);
router.delete("/deleteProfile",islogedin,deleteAccount);
router.get("/getuserdetails",islogedin,getAllUserDetails);
module.exports=router;