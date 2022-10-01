const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema(
    {
      nickname: {
        type: String,
        require: true
      },
      email: {
        type: String,
        require: true,
        lowercase: true,
        unique: true
      },
      password: {
        type: String,
        require: true
      }
    },
    {
      _id: true,
      id: true,
      timestamps: true,
    }
  )
);

module.exports = User;
