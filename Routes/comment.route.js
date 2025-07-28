
import express from 'express';
import {
  addComment,
  getCommentByVideoId,
  deleteComment,
  updateComment
} from '../Controllers/comment.controller.js';
import { auth } from '../middleware/auth.middleware.js';

const router = express.Router();


router.post('/comment', auth, addComment);
router.get('/comment/:videoId', getCommentByVideoId);
router.put('/comment/:id', auth, updateComment);
router.delete('/comment/:id', auth, deleteComment);

export default router;

