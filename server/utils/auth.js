import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

const authMiddleware = (req, res, next) => {
    const authorizationHeader = req.header("Authorization");
    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
        return res.status(401).json({success: false, message: "Invalid authorization header"});
    }
    const token = authorizationHeader.replace("Bearer ", "");
    if (!token) {
        return  res.status(401).json({success: false, message: "Authorization token not found"});
    }
    try{
        req.user = jwt.verify(token, process.env.SECRET_KEY);
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({success : false, message: "Invalid token"});
    }
}

export default authMiddleware;