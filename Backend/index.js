// requiring express
const express=require("express");
const app=express();

// connecting db 
const {connectdb,startcloudinary} =require("./config");
connectdb();
// connect cloudinary
startcloudinary();

// dotenv and port work
require("dotenv").config();
const port=process.env.port||4000;

// requring requied middlewares
app.use(express.json());
const cors=require("cors");
app.use(cors());

// requiring file upload
const fileUpload=require("express-fileupload");
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// Routes
const userRoute=require("./Routes/User");
const listingRoute=require("./Routes/Listing");
const reviewRoute=require("./Routes/Review");
const profileRoute=require("./Routes/Profile");
app.use("/api/v1/auth",userRoute);
app.use("/api/v1/listings",listingRoute);
app.use("/api/v1/review",reviewRoute);
app.use("/api/v1/profile",profileRoute);

// app is listening
app.listen(port,(req,res)=>{
    console.log("app is listening on port ",port);
})