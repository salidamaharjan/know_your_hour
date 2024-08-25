import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/index";
import express from "express";
const router = express.Router();

router.post("/login", async (req, res) => {
    try {
        const {username, password} = req.body;
        const user = await User.findOne({
            where: {
                username,
            }
        });
        if (!user) {
            res.status(200).json({message: "User not found"});
            return;
        }

        const checkPasswordIsValid = await bcrypt.compare(password, user.password);
        if (!checkPasswordIsValid){
            res.status(400).json({message: "Incorrect username and password combination"});
        }
        const token = jwt.sign({id: user.id}, prcess.env.SECRET_KEY, {
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