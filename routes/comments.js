const express = require("express");
const router = express.Router();
const commentsController = require("../controllers/comments");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Comment Routes - simplified for now

// router.post("/createPost", upload.single("file"), postsController.createPost);

router.post("/createComment/:id", commentsController.createComment);

module.exports = router;
