require("dotenv").config();
const jwt = require("jsonwebtoken");
exports.islogedin = async (req, res, next) => {
    try {
        let token = req.headers.authorization.split("Bearer ")[1];
        if (token==="null") {
            return res.status(200).json({
                success: false,
                message: "Token not Found",
            })
        }
        if (token===null) {
            return res.status(200).json({
                success: false,
                message: "Token not Found",
            })
        }
        let payload;
        try {
            payload = jwt.verify(token, process.env.JWT_SECRETKEY);
        } catch (error) {
            return res.status(200).json({
                success: false,
                message: "Invalid Tokenn ",
            })
        }
        req.user = { ...payload };
        next();
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "error in isloged in  Middleware in backend",
            data: error.message,
        })
    }
}