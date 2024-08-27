import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/index.js";
import express from "express";
const router = express.Router();

router.post("/signup", async (req, res)=>{
   try{
       const {username, password} = req.body;
       const user = await User.findOne({
           where: {username}
       });
       if(user) {
           res.status(200).json({message: "User already exists"});
       }else {
           const newUser = await User.create({
               username,
               password: await bcrypt.hash(password, 15),
           });
           const token = jwt.sign({id: newUser.id}, process.env.SECRET_KEY, {
               expiresIn: process.env.JWT_EXPIRATION,
           });

           res.status(200).send({
               id: newUser.id,
               username: newUser.username,
               accessToken: token,
           });
       }
   } catch (err) {
       res.status(500).json({message: err});
   }
});

export default router;