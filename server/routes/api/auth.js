const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const auth = require('../../middleware/auth');
const { getUser, signUser } = require('../../controllers/auth.controller');

router.get('/', auth, getUser);

router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  signUser
);

module.exports = router;
