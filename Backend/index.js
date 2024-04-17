// requiring express
const express=require("express");
const app=express();

// connecting db 
const connectdb =require("./config");
connectdb();

// dotenv and port work
require("dotenv").config();
const port=process.env.port||4000;

const userRoute=require("./Routes/User");
app.use("/api/v1/auth",userRoute)

// app is listening
app.listen(port,(req,res)=>{
    console.log("app is listening on port ",port);
})