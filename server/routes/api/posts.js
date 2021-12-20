const express = require('express');
const router = express.Router();
const {createPost, getAllPosts, getPostId} = require('../../controllers/post.controller.js')
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


// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', auth, getAllPosts)


// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', auth, getPostId)


module.exports = router;
