

import express from 'express'
import cookieParser from 'cookie-parser';
import './Connection/conn.js'
import AuthRoutes from './Routes/user.route.js';
import VideoRoutes from './Routes/video.route.js'
import CommentRoutes from './Routes/comment.route.js'
import cors from 'cors'

const app = express()

const PORT = 8000

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))


app.use(express.json())
app.use(cookieParser())

app.use('/auth', AuthRoutes)
app.use('/api', VideoRoutes)
app.use('/commentApi', CommentRoutes)

app.listen(PORT, ()=>{
    console.log(`Server listening at http://localhost:${PORT} 🎉 🥳 🎉`)
})




