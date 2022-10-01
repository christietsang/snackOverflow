const SnackPost = require("../models/snackPostModel");

const postController = {
  createPost: async (req, res) => {
    const { title, description, closingTime } = req.body;
    try {
      const newPost = await SnackPost.create({
        title,
        description,
        closingTime,
        owner: req.user.id,
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
  // editPost: async (req, res) => {
  //   const postId = req.params.id;
  //   const postFields = ["title", "description", "closingTime", ""]
    
  //   try {
  //     const updatedPost = await SnackPost.findByIdAndUpdate(
  //       postId,
  //       {title: req.body.title}
  //     )
  //   }
  // },
};

module.exports = postController;
