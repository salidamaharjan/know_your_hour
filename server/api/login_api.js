import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/index.js";
import express from "express";
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body;
        console.log("line 12", {username, password});

        const user = await User.findOne({
            where: {
                username,
            }
        });
        console.log("Username found -- " + !!user);
        if (!user) {
            res.status(200).json({message: "User not found"});
            return;
        }
        console.log("user.password == " + user.password)

        const checkPasswordIsValid = await bcrypt.compare(password, user.password);
        console.log("checkPasswordIsValid",checkPasswordIsValid);
        if (!checkPasswordIsValid){
            res.status(400).json({message: "Incorrect username and password combination"});
            return;
        }
        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRATION,
        });

        res.status(200).send({
            id: user.id,
            username: user.username,
            accessToken: token,
        });
    } catch(err){
        res.status(500).json({message: err});
    }
});

export default router;