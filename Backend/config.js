// configuration of db 
require("dotenv").config();
const mongoose = require("mongoose");

let connectdb = async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/airbnb")
        .then(() => console.log("connected to db successfullly"))
        .catch((error) => console.log("error in connecting to db", error));
}

module.exports = connectdb;


// configuration of  nodemailer
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    host: process.env.NODEMAILER_HOST,
    auth: {
        user: process.env.NODEMAIL_USERNAME,
        pass: process.env.NODEMAILER_PASS,
    }
})

// configuration of cloudinary 
const cloudinary = require('cloudinary').v2;
let startcloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "error in connecting cloudinary",
            data: error.message,
        })
    }
}
module.exports = { connectdb, transporter, startcloudinary }



