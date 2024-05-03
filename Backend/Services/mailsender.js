const {transporter}=require("../config");
async function sendmail(email,otp){
    let info;
    try {
         info=await transporter.sendMail({
            to:email,
            subject:"OTP From AIRBNB",
            text:otp,
        })
        // console.log(info);
    } catch (error) {
        let info={
            message:"error in sending mail ",
            data:error,
        }
        return info;
    }
    return info
}
module.exports=sendmail