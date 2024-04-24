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
    console.log("requrest revied");
    await sendmail(doc.email,doc.otp);
})
const otp=mongoose.model("otp",otpSchema);
module.exports=otp;