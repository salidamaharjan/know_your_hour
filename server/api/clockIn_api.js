import express from "express";
const router = express.Router();
import authMiddleware from "../utils/auth.js";

router.post("/clockin", authMiddleware, async (req, res) => {
    try {
        const loggedInUser = req.user;
        const authorizedId = loggedInUser.id;
    }catch(err){
            res.status(500).json({message: err});
        }
})