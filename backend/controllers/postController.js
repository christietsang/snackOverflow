const SnackPost = require("../models/snackPostModel");
const fs = require("fs").promises;

const postController = {
  createPost: async (req, res) => {
    const { title, description, closingTime } = req.body;
    const files = req.files;
    const images = [];
    if (files && files.length > 0) {
      for (let file of files) {
        try {
          const imageBuffer = await fs.readFile(`./uploads/${file.filename}`);
          const contentType = file.mimeType;
          images.push({ data: imageBuffer, contentType });
          fs.unlink(`./uploads/${file.filename}`);
        } catch (err) {
          console.log(err);
        }
      }
    }

    try {
      const newPost = await SnackPost.create({
        title,
        description,
        closingTime,
        owner: req.user.id,
        images,
      });
      res.json(newPost);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  getAvailablePosts: async (req, res) => {
    try {
      const posts = await SnackPost.find({ available: true }).exec();
      res.json(posts);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  getPostByUser: async (req, res) => {
    const userId = req.user.id;
    try {
      const posts = await SnackPost.find({ owner: userId }).exec();
      res.json(posts);
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  },
  editPost: async (req, res) => {
    const postId = req.params.id;
    const postFields = ["title", "description", "closingTime", "available"];

    const updateData = {};
    for (let key in req.body) {
      if (postFields.indexOf(key) !== -1) {
        updateData[key] = req.body[key];
      }
    }

    try {
      const updatedPost = await SnackPost.findByIdAndUpdate(
        postId,
        updateData,
        { new: true }
      ).exec();
      res.json(updatedPost);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
};

module.exports = postController;
