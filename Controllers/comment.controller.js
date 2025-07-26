
import Comment from "../Models/comment.js";




export const addComment = async (req, res) => {
    try{
        let {video, comment} = req.body
        const cmnt = new Comment({user: req.user._conditions._id, video, comment})
        
        await cmnt.save()
        res.status(201).json({success: "true", cmnt})
    } catch(error){
        res.status(500).json({error: "server error"})
    }
}




export const getCommentByVideoId = async (req, res) => {
    try{
        let {videoId} = req.params
        const comments = await Comment.find({video: videoId}).populate('user', 'channelName profilePic userName createdAt')
        res.status(201).json({success: "true", comments})


    }catch(error){
        res.status(500).json({error: "server error"})
    }
}










