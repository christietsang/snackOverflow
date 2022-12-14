const mongoose = require("mongoose");

const SnackPost = mongoose.model(
  "SnackPost",
  new mongoose.Schema(
    {
      title: {
        type: String,
        require: true,
      },
      description: String,
      closingTime: {
        type: Date,
      },
      available: {
        type: Boolean,
        default: true,
      },
      owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      images: [
        {
          data: Buffer,
          contentType: String,
        },
      ],
    },
    {
      _id: true,
      id: true,
      timestamps: true,
    }
  )
);

module.exports = SnackPost;
