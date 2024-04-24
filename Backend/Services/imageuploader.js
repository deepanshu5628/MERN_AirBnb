let cloudinary = require('cloudinary').v2;

async function imageupload(img){
    try {
        let info=await cloudinary.uploader.upload(img.tempFilePath,{folder:"AirBNB",resource_type:"image"})
        return info;
    } catch (error) {
        return error
    }
}

module.exports=imageupload;