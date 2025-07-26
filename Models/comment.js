
import mongoose from "mongoose";


const commentSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    video: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'video',
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {timestamps:true})


export default mongoose.model('comment', commentSchema)









