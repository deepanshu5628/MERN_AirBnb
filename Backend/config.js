const mongoose=require("mongoose");

let connectdb=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/airbnb")
    .then(()=>console.log("connected to db successfullly"))
    .catch((error)=>console.log("error in connecting to db",error));
}

module.exports=connectdb;