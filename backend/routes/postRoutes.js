const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();
const verifyJwtToken = require("../middleware/authJwt");
const { upload } = require("../middleware/multer");

router.get("/availablePosts", verifyJwtToken, postController.getAvailablePosts);
router.post(
  "/create",
  verifyJwtToken,
  upload.array("postImages", 5),
  postController.createPost
);
router.get("/byCurrentUser", verifyJwtToken, postController.getPostByUser);
router.get("/getSinglePost/:id", verifyJwtToken, postController.getSinglePost);
router.put("/editPost/:id", verifyJwtToken, postController.editPost);

module.exports = router;
