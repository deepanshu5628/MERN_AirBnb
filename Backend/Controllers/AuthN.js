require("dotenv").config();
const validator=require("validator");
const User = require("../Models/User");
const Otp = require("../Models/Otp");
const bcrypt = require("bcrypt");
const { transporter } = require("../config");
const otpGenerator = require('otp-generator');
const jwt=require("jsonwebtoken");
exports.sendotp = async (req, res) => {
    try {
        // fetch email from the body 
        let { email } = req.body;
        // perform basic validation 
        if (!email) {
            return res.status(200).json({
                success: false,
                message: "Fill in all details",
            })
        }
        // validations on email
        if(!validator.isEmail(email)){
            return res.status(200).json({
                success: false,
                message: "Please enter a valid email",
            })
        }
        // checking if the email is already exist in the db or not 
        let givenemail = await User.findOne({ email });
        if (givenemail) {
            return res.status(200).json({
                success: false,
                message: "Email already exists",
            })
        }
        // mail id doesn't exist 
        // generate a otp 
        let otp = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false })
        // save the generated opt in the db 
        let optdb = await Otp.create(
            { email, otp }
        )
        // console.log(optdb);
        // send the responce
        res.status(200).json({
            success: true,
            message: "Mail Sended",
            opt:otp,
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "error in sendotp controller in backend",
            data: error.message,
        })
    }
}
exports.signup = async (req, res) => {
    try {
        // fetch data from body 
        let { firstName, lastName, email, password, confirmPassword, otp } = req.body;
        // perform basic validation's
        if (!firstName || !lastName || !email || !password || !confirmPassword || !otp) {
            return res.status(200).json({
                success: false,
                message: "fill in all the details",
            })
        }
        // check if the pass and confirm pass are same
        if (password !== confirmPassword) {
            return res.status(200).json({
                success: false,
                message: "Password's do not match ",
            })
        }
        // check if the email is alredy registered or not 
        let isuserexist;
        try {
            isuserexist = await User.findOne({ email });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "error in verifying that the user exist or not ",
                data: error.message,
            })
        }
        if (isuserexist) {
            return res.status(200).json({
                success: false,
                message: "Mail id already exist's",
            })
        }
        // check for otp 
        let dbotp = await Otp.findOne({ email });
        if (!dbotp) {
            return res.status(200).json({
                success: false,
                message: "Otp Expired",
            })
        }
        if (dbotp.otp != otp) {
            return res.status(200).json({
                success: true,
                message: "Wrong Otp",
            })
        }
        let hashedpass;
        try {
            hashedpass = await bcrypt.hash(password, 10);
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "error in hashing the password",
                data: error,
            })
        }
        // generate image
        let imgurl;
        try {
            imgurl = `https://ui-avatars.com/api/?name=${firstName}+${lastName}`
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "error in Generating image dp ",
                data: error,
            })
        }
        // save the hashed pass and all other details in the db
        let newuser;
        try {
            newuser = await User.create({
                email, firstName, lastName, password: hashedpass, image: imgurl,
            })
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "error in Creating a new user  ",
                data: error,
            })
        }
        // return responce
        res.status(200).json({
            success: true,
            message: "user Created Successfully",
            // data: newuser,
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "error in signup controller in backend",
            data: error.message,
        })
    }
}

exports.login = async (req, res) => {
    try {
        // fetch body data
        let { email, password } = req.body;
        // basic validation
        if (!email || !password) {
            return res.status(200).json({
                success: false,
                message: "fill in all details",
            })
        }
        // check if this user existes or not
        let userinfo = await User.findOne({ email });
        if (!userinfo) {
            return res.status(200).json({
                success: false,
                message: "User doesn't exists",
            })
        }
        // check the password
        let correctpass=await bcrypt.compare(password,userinfo.password)
        if(!correctpass){
            return res.status(200).json({
                success:false,
                message:"Wrong Password",
            })
        }
        const payload={
            email,_id:userinfo._id,
        }
        userinfo.password=undefined;
        // generate jwt token
        let token;
        try {
            token=await jwt.sign(payload,process.env.JWT_SECRETKEY)
        } catch (error) {
            return res.status(200).json({
                success:false,
                message:"error in creating jwt token",
            })
        }
        // send respocne 
        res.status(200).json({
            success:true,
            message:"Loged in",
            token,
            userinfo
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "error in login controller in backend",
            data: error.message,
        })
    }
}

exports.changePassword=async(req,res)=>{
    try {
        // fetch passs and newppas
        let {password,confirmpassword}=req.body;
        // fetch payload
        let payload=req.user;
        // perform validation
        if(!payload){
            return res.status(400).json({
                success:false,
                message:"User must be loged in to change the password",
            });
        }
        // match password's
        if(password!==confirmpassword){
            return res.status(400).json({
                success:false,
                message:"password and confirm password should be the same",
            });
        }
        // hash the pwd
        let hashedpassword=await bcrypt.hash(password,10);
        // update the password in the db 
        let userdetails=await User.findOneAndUpdate({
            email:payload.email,
        },{
            password:hashedpassword,
        },{
            new:true
        });
        // send respocne 
        res.status(200).json({
            success:true,
            message:"password has been updated successfully",
        });

    } catch (error) {
        return res.status(400).json({
            success:false,
            message:"error in changepassword controller",
            data:error.message
        });   
    }
}