const express = require('express');
const router = express.Router();
const {
  addComment,
  createPost,
  getAllPosts,
  getPostId,
  deletePostId,
  likePost,
  unlikePost,
} = require('../../controllers/post.controller.js');
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
router.get('/', auth, getAllPosts);

// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', auth, getPostId);

// @route    DELETE api/posts/:id
// @desc     Delete post by ID
// @access   Private
router.delete('/:id', auth, deletePostId);

// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   Private
router.put('/like/:id', auth, likePost);

// @route    PUT api/posts/unlike/:id
// @desc     Unlike a post
// @access   Private
router.put('/unlike/:id', auth, unlikePost);


// @route    POST api/posts/comment/:id
// @desc     Comment on a post
// @access   Private
router.post(
  '/comment/:id',
  [auth, [check('text', 'Text is required').not().isEmpty()]],
  addComment
);



module.exports = router;
