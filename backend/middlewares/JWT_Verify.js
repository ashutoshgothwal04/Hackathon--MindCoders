import jwt from "jsonwebtoken";
import { User } from "../models/user.models.js";

export const verifyJWT = async (req, res, next) => {
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized request - No token provided",
            });
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken");
        
        if (!user) {
            return res.status(401).json({
                success: false,
                message: "Invalid Access Token - User not found",
            });
        }
    
        req.user = user;
        next();
    } catch (error) {
        console.error("JWT Verification Error:", error.message);
        return res.status(401).json({
            success: false,
            message: "Invalid access token",
            error: process.env.NODE_ENV === "development" ? error.message : undefined
        });
    }
};