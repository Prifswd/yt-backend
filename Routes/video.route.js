import express from 'express'
import { getAllVideo, getAllVideoByUserId, getVideoById, uploadVideo } from '../Controllers/video.controller.js';
import {auth} from '../middleware/auth.middleware.js'


const router = express.Router()

router.post('/video', auth, uploadVideo)
router.get('/allvideo', getAllVideo)
router.get('/getvideobyid/:id', getVideoById)
router.get('/:userId/channel', getAllVideoByUserId)




export default router;