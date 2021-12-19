const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../../middleware/auth');
const { getCurrentUser, signUser } = require('../../controllers/auth.controller');


// @route    GET api/auth
// @desc     Get user by token
// @access   Private
router.get('/', auth, getCurrentUser);


// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  signUser
);

module.exports = router;
