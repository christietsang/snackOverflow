const mongoose = require("mongoose");

const SnackPost = mongoose.model(
  "SnackPost",
  new mongoose.Schema(
    {
      title: {
        type: String,
        require: true
      },
      description: String,
      closingTime: {
        type: Date
      },
      comments: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Comment",
        },
      ],
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      }
    },
    {
      _id: true,
      id: true,
      timestamps: true,
    }
  )
);

module.exports = SnackPost;
