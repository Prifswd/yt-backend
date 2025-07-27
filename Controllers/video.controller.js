

import Video from '../Models/video.js'



export const uploadVideo = async (req, res) => {
    try{
        const {title, description, videoLink, videoType, thumbnail} = req.body
        console.log(req.user._conditions._id)
        const videoUpload = new Video({user: req.user._conditions._id, title, description, videoLink, videoType, thumbnail})
        await videoUpload.save()
        res.status(201).json({success: "true", videoUpload})

    } catch(error){
        res.status(500).json({error: "server error"})
    }
}




export const getAllVideo = async (req, res) => {
    try{
        const videos = await Video.find().populate('user', 'channelName profilePic userName createdAt')
        res.status(201).json({success: "true", 'videos': videos})

    } catch(error){
        res.status(500).json({error: "server error"})
    }

}



export const getVideoById = async (req, res) => {
    try{
        let {id} = req.params
        const video = await Video.findById(id).populate('user', 'channelName profilePic userName createdAt')
        res.status(201).json({success: "true", "video": video})

    } catch(error){
        res.status(500).json({error: "server error"})
    }
    
}





export const getAllVideoByUserId = async (req, res) => {
    try{
        let {userId} = req.params
        const video = await Video.find({user: userId}).populate('user', 'channelName profilePic userName createdAt about')
        res.status(201).json({success: "true", "video": video})

    } catch(error){
        res.status(500).json({error: "server error"})
    }
}



