const express = require('express');
const router = express.Router();
const {createPost} = require('../../controllers/post.controller.js')
const auth = require('../../middleware/auth');
const { check } = require('express-validator');
const Post = require('../../models/Post');

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  '/',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  createPost
);

module.exports = router;
