const mongoose=require("mongoose");
const reviewSechmea=new mongoose.Schema({
    rating:{
        type:Number,
        min:1,
        max:5,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    },
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const Review=mongoose.model("Review",reviewSechmea);
module.exports=Review;