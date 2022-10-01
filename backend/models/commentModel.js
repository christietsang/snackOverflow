const mongoose = require("mongoose");

const Comment = mongoose.model(
  "Comment",
  new mongoose.Schema(
    {
      message: {
        type: String,
        require: true
      },
      sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SnackPost",
      }
    },
    {
      _id: true,
      id: true,
      timestamps: true,
    }
  )
);

module.exports = Comment;
