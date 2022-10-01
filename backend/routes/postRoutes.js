const express = require("express");
const postController = require("../controllers/postController");
const router = express.Router();
const verifyJwtToken = require("../middleware/authJwt");

router.get("/availablePosts", verifyJwtToken, postController.getAvailablePosts);
router.post("/create", verifyJwtToken, postController.createPost);
router.get("/byCurrentUser", verifyJwtToken, postController.getPostByUser);
router.put("/editPost/:id", verifyJwtToken, postController.editPost);

module.exports = router;