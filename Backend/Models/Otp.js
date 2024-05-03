const mongoose=require("mongoose");
const sendmail=require("../Services/mailsender");
const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:Number,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now(),
        expires:60*5,
    }
})
otpSchema.post("save",async(doc)=>{
    // console.log("requrest revied");
    let res;
    try {
         res= await sendmail(doc.email,doc.otp.toString());
    } catch (error) {
        console.log(error);
    }
//    console.log("responce in the otp modal ",res);
})
const otp=mongoose.model("otp",otpSchema);
module.exports=otp;