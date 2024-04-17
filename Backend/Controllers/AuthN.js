const User = require("../Models/User")
const bcrypt = require("bcrypt");
exports.signup = async (req, res) => {
    try {
        // fetch data from body 
        let { firstName, lastName, email, password, confirmPassword } = req.body;
        // perform basic validation's
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "fill in all the details",
                data: error,
            })
        }
        // check if the pass and confirm pass are same
        if (password !== confirmPassword) {
            return res.status(400).json({
                success: false,
                message: "Password's do not match ",
                data: error,
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
                data: error,
            })
        }
        if (isuserexist) {
            return res.status(400).json({
                success: false,
                message: "Mail id already exist's",
                data: error,
            })
        }
        // check for otp 
        // pending
        // if the email doesn't exist then hash the password and save it to the db 
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
            data: newuser,
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "error in signup controller in backend",
            data: error,
        })
    }
}

exports.login = async (req, res) => {
    console.log("heelog ");
}