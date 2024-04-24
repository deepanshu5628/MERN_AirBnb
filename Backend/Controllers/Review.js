const Listing=require("../Models/Listings");
const Review = require("../Models/Review");

//------------------------ create Review------------------------------
exports.createReview=async(req,res)=>{
    try {
        let {rating,review,listingId}=req.body;
        // perform basic validation
        if(!rating||!review){
            return res.status(200).json({
                success:false,
                message:"Fill in all the details",
            })
        } 

        // check if the listing id valid or not 
        let listinginfo=await Listing.findById(listingId);
        if(!listinginfo){
            return res.status(200).json({
                success:false,
                message:"Invalid Listing id",
            })
        }
        // if you are the owner of the listinig then you cannot create a revew
        if(req.user._id.toString() ===listinginfo.owner.toString()){
            return res.status(200).json({
                success:false,
                message:"Owner Can't post a revewi",
            })
        }
        // pending a user can only post a review once 
        // create a review 
        let newreview=await Review.create({
            rating,review,createdBy:req.user._id,
        })
        // save the reveiw's object id in the listing
        let updatedlistinginfo=await Listing.findByIdAndUpdate(listingId,{
            $push:{reviews:newreview._id},
        },{new:true})
        // send the responce 
        res.status(200).json({
            success:true,
            message:"reveiw Created Successfully",
            updatedlistinginfo,
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "error while Creating the review",
            data: error.message,
        })
    }
}

// ---------------------------deleting Review----------------------------
exports.deletereview=async(req,res)=>{
    try {
        // fetch data form req ki body 
        let {listingId,reviewId}=req.body;
        // bsic validation's
        if(!reviewId||!listingId){
            return res.status(200).json({
                success:false,
                message:"fill in all the details",
            })
        }
        
        // check if review exist with this reviewId
        let reveiwinfo=await Review.findById(reviewId).populate("createdBy");
        // console.log(reveiwinfo)
        if(!reveiwinfo){
            return res.status(200).json({
                success:false,
                message:"Invalid Reveiw ID, Reivew Doesn't exist",
            })
        }
        // check if the curr user is the owner of the review
        if(req.user._id.toString() !== reveiwinfo.createdBy._id.toString()){
            return res.status(200).json({
                success:false,
                message:"Only the reveiw Owner can delete the revivew",
            })
        }
        // pending listing owner can also delte the listing
        // delete the reveiw 
        try {
            let deletedreveiw=await Review.findByIdAndDelete(reviewId);
        } catch (error) {
            return res.status(200).json({
                success:false,
                message:"Error in deleteing review from the review schema ",
                data:error,
            })
        }
        // remove the review id from the listing's review schema 
        try {
            let revidlist=await Listing.findByIdAndUpdate(listingId,{
                $pull:{reviews:{$eq:reveiwinfo._id}}
            },{new:true})
        } catch (error) {
            return res.status(200).json({
                success:false,
                message:"Error in deleteing reviewid form the listing schema",
                data:error,
            })
        }

        // send the responce 
        res.status(200).json({
            success:true,
            message:"Review Deleted SuccessfullY",
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "error while deleting the review",
            data: error.message,
        })
    }
}