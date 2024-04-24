const mongoose=require("mongoose");

const listingSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
        min:10,
        max:100000,
    },
    country:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    reviews:[{
        type:mongoose.Types.ObjectId,
        ref:"Review" 
    }],
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true,
    },
    category:{
        type:String,
        required:true,
        enum:["Farms","Iconic Bulidings","Beach","Trams","Castle","Wine","Monestrys","Hotel","Villa","Farm House"],
    }
})

const Listing= mongoose.model("Listing",listingSchema);
module.exports=Listing;