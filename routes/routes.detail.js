const express = require('express');
const router = express.Router();

const postController = require("../controllers/PostController");
const commentController = require("../controllers/CommentController");


router.get('/:id', postController.getPostById);

router.post('/add-comment', commentController.addComment);

module.exports = router;
