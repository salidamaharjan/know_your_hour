import express from "express";
const router = express.Router();
import authMiddleware from "../utils/auth.js";
router.get("/viewallhours", authMiddleware, async(req, res) => {
    const loggedInUser = req.user;
    const authorizedId = loggedInUser.id;
    try{
    const allHours = {
        "userId": 2,
        "total hours": "48 hrs",
        };
    if (authorizedId === allHours.userId) {res.status(200).json(allHours);}
    res.status(400).json({message: "Invalid User"});
    } catch (err) {
        console.log(err);
        res.status(500).json({message: err});
    }
})

export default router;
