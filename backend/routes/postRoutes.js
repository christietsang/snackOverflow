const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();
const verifyJwtToken = require("../middleware/authJwt");
const { upload } = require("./middleware/multer");

router.get("/availablePosts", verifyJwtToken, postController.getAvailablePosts);
router.post(
  "/create",
  verifyJwtToken,
  upload.single("avatar"),
  postController.createPost
);
router.get("/byCurrentUser", verifyJwtToken, postController.getPostByUser);
router.put("/editPost/:id", verifyJwtToken, postController.editPost);

module.exports = router;
