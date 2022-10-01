const express = require("express");
const commentController = require("../controllers/commentController");
const router = express.Router();
const verifyJwtToken = require("../middleware/authJwt");

router.get("/commentsByPost/:postId", verifyJwtToken, commentController.getCommentsByPost);
router.post(
  "/create/:postId",
  verifyJwtToken,
  commentController.createComment
);

module.exports = router;
