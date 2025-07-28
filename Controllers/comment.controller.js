
import Comment from "../Models/comment.js";

// add a comment
export const addComment = async (req, res) => {
  try {
    const { video, comment } = req.body;
    const cmnt = new Comment({
      user: req.user._id, 
      video,
      comment,
    });

    await cmnt.save();
    res.status(201).json({ success: "true", cmnt });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// get comments by video ID
export const getCommentByVideoId = async (req, res) => {
  try {
    const { videoId } = req.params;
    const comments = await Comment.find({ video: videoId }).populate(
      "user",
      "channelName profilePic userName createdAt"
    );
    res.status(201).json({ success: "true", comments });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// delete comment by ID
export const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    if (comment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized to delete comment" });
    }

    await comment.deleteOne();
    res.status(200).json({ success: true, message: "Comment deleted" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

// update comment by ID
export const updateComment = async (req, res) => {
  try {
    const { comment } = req.body;
    const existingComment = await Comment.findById(req.params.id);

    if (!existingComment)
      return res.status(404).json({ error: "Comment not found" });

    if (existingComment.user.toString() !== req.user._id.toString()) {
      return res.status(403).json({ error: "Unauthorized to update comment" });
    }

    existingComment.comment = comment;
    await existingComment.save();

    res.status(200).json({ success: true, updated: existingComment });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};







