
import User from '../Models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const cookieOptions = {
    httpOnly: true,
    secure: false,
    sameSite: 'Lax'
}



export const signup = async (req,res)=>{
    try{
        const {channelName, userName, about, profilePic, password} = req.body
        const isExist = await User.findOne({userName})
        if(isExist){
            res.status(400).json({error : "username already exits"})
        } else{
            let updatedPass = await bcrypt.hash(password, 10)
            const user = new User({channelName, userName, about, profilePic, password: updatedPass})
            await user.save()
            res.status(201).json({message: "user registered successfully", data: user})
        }
    } catch(err){
            res.status(500).json({err: "server error"})
    }
}


export const login = async (req,res)=>{
    try{
        const {userName, password} = req.body
        const user = await User.findOne({userName})
        if(user && await bcrypt.compare(password, user.password)){
            const token = jwt.sign({userId: user._id}, "secretKey")
            res.cookie('token', token, cookieOptions)
            res.json({message: "login successfully", token, user})
        } else{
            res.status(400).json({error: "invalid credentials"})
        }
    } catch(err){
        res.status(500).json({err: "server error"})
    }
}



export const logout = async(req, res) => {
    res.clearCookie('token', cookieOptions).json({message: "logout successfully"})
}



