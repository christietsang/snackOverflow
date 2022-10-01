const Comment = require("../models/commentModel");

const commentController = {
  createComment: async (req, res) => {
    const { message } = req.body;
    const { postId } = req.params;
    const senderId = req.user.id;

    try {
      const newComment = await Comment.create({
        message,
        sender: senderId,
        post: postId,
      });
      res.json(newComment);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  getCommentsByPost: async (req, res) => {
    const { postId } = req.params;
    try {
      const comments = await Comment.find({ post: postId }).exec();
      res.json(comments);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};

module.exports = commentController;
