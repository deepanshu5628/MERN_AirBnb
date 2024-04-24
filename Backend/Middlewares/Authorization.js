const jwt = require("jsonwebtoken");
exports.islogedin = async (req, res, next) => {
    try {
        console.log("in is loged in middleware");
        console.log();
        if (!req.headers.authorization) {
            return res.status(200).json({
                success: false,
                message: "Token not Found",
            })
        }
        let token = req.headers.authorization.split("Bearer ")[1];
        let payload;
        try {
            payload = jwt.verify(token, process.env.JWT_SECRETKEY);
        } catch (error) {
            return res.status(200).json({
                success: false,
                message: "Invalid Token",
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