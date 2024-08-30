import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/index.js";
import express from "express";

dotenv.config();

const router = express.Router();

router.post("/signup", async (req, res) => {
    try {
        console.log("Signup called");
        const {username, password} = req.body;
        console.log("Username and password from req ", {username, password})
        const user = await User.findOne({
            where: {username}
        });
        if (user) {
            console.log("User already exists");
            res.status(200).json({message: "User already exists"});
            return;
        }
        const newUser = await User.create({
            username,
            password: await  bcrypt.hash(password,15),
        });
        const token = jwt.sign({id: newUser.id}, process.env.SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRATION,
        });

        res.status(200).send({
            id: newUser.id,
            username: newUser.username,
            accessToken: token,
        });
    } catch (err) {
        res.status(500).json({message: err});
    }
});

export default router;