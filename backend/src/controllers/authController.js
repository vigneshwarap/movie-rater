import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';
import * as userService from "../services/userService.js";


export const register = async (req, res, next) => {
    try {
        const {username, password, role, email} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const userData = { username, password : hashedPassword, role, email}
        await userService.createUser(userData)
        res.status(201).json({message : `User registerd successfully ${username}`})
    } catch (err) {
        console.log("Error while registering the user", err);
        res.status(500).json({message : `Something went wrong`})
    }
}

export const login = async (req, res, next) => {
    try {
        const { username, password} = req.body;
        const userInDb = await User.findOne({username})
        if (!userInDb) {
            return res.status(404).json({message : `Invalid credentials`})
        }

        const isMatch = await bcrypt.compare(password, userInDb.password)

        if (!isMatch) {
            res.status(400),json({message : `Invalid credentials`})
        }

        // Token generation
        const token = jwt.sign({id : userInDb._id, role: userInDb.role}, process.env.JWT_SECRET, {expiresIn:"1h"})
        console.log("Token "+ token)

        res.status(200).json({token})
    } catch (err) {
        res.status(500).json({message : "Something went wrong"})
    }

}