const User = require("../Models/User");
const Listing = require("../Models/Listings");
const imageupload = require("../Services/imageuploader");


// Create A Listing's 
exports.createlisting = async (req, res) => {
    try {
        // fetch data from requrest ki body 
        let { title, description, price, country, location, category } = req.body;
        // perform basic validation's
        if (!title || !description || !price || !country || !location || !category) {
            return res.status(200).json({
                success: false,
                message: "Fill in All details",
            })
        }
        // fetch image from req.files
        let { image } = req.files;
        if (!image) {
            return res.status(200).json({
                success: false,
                message: "Please Upload image",
            })
        }
        // validation's on image 
        let imagetype = image.mimetype.split("/")[0];
        if (imagetype != "image") {
            return res.status(200).json({
                success: false,
                message: "You Can only Upload a image",
            })
        }
        if (image.size > 1066166) {
            return res.status(200).json({
                success: false,
                message: "Size should be less then 1 mb"
            })
        }
        // if we are here means everything is okay with data and as well as image 
        let imginfo
        try {
            imginfo = await imageupload(image);
        } catch (error) {
            return res.status(200).json({
                success: false,
                message: "Error in uploading img to Cloudinary",
                data: error,
            })
        }
        // create entry in db 
        let newlisting;
        try {
            newlisting = await Listing.create({
                title, description, price, category, location, country, image: imginfo.secure_url, owner: req.user._id,
            })
        } catch (error) {
            return res.status(200).json({
                success: false,
                message: "error while creating the listing",
                data: error.message,
            })
        }

        // send respocne
        res.status(200).json({
            success: true,
            messsage: "successfullly Created",
            newlisting,
        })
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "error in create listing  controller in backend",
            data: error.message,
        })
    }
}

// Delete A Listings's
exports.deletelisting = async (req, res) => {
    try {
        // fetch data form requrest ki body 
        let { listingId } = req.body;
        // if any listing with this listing id 
        let listinginfo = await Listing.findOne({ _id: listingId });
        if (!listinginfo) {
            return res.status(200).json({
                success: false,
                message: "invalid listing id ",
            })
        }
        // check if the curr user is the owner of the listing 
        let curruserinfo = await User.findById(req.user._id);
        let userid=curruserinfo._id.toString();
        let listingowner=listinginfo.owner.toString();
        if(userid !==listingowner){
            return res.status(200).json({
                success:false,
                message:"You R not The Owner",
            })
        }
        // Delete the listing
        let deletedlisting;
        try {
         deletedlisting=await Listing.findByIdAndDelete(listingId);
        } catch (error) {
            return res.status(200).json({
                success:false,
                message:"error in deleteding the lsiting",
                data:error,
            })
        }  
        // send Responce
        res.status(200).json({
            success: true,
            message: "Deleted Successfully",
        })
    } catch (error) {
        return res.status(200).json({
            success: false,
            message: "error while creating the listing",
            data: error.message,
        })
    }
}