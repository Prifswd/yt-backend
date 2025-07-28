
import jwt from 'jsonwebtoken'
import User from '../Models/user.js'

export const auth = async (req, res, next) =>{
    const token = req.cookies.token
    if(!token){
        return res.status(401).json({error: "token not found, access denied"})
    } else{
        try{
            const decode = jwt.verify(token, "secretKey")
            req.user = await User.findById(decode.userId).select('-password')
            next()
        }catch(err){
            res.status(401).json({error: "token not valid"})
        }
    }
}





