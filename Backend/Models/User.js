const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    additionalInformation: {
        type: mongoose.Types.ObjectId,
        ref: "Profile",
        default:null,
    }
})

const User=mongoose.model("User",userSchema);
module.exports=User;