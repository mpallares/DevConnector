const express = require('express');
const router = express.Router();
const {
  updateProfileExperience,
  deleteProfileAndUser,
  getUserIdProfile,
  getAllProfiles,
  getCurrentUserProfile,
  createUpdateProfile,
} = require('../../controllers/profile.controller');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

// @route    GET api/profile
// @desc     Get all profiles
// @access   Public
router.get('/', getAllProfiles);

// @route    GET api/profile/user/:user_id
// @desc     Get profile by user ID
// @access   Public
router.get('/user/:user_id', getUserIdProfile);

// @route    GET api/profile/me
// @desc     Get current users profile
// @access   Private
router.get('/me', auth, getCurrentUserProfile);

// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('status', 'Status is required').not().isEmpty(),
      check('skills', 'Skills is required').not().isEmpty(),
    ],
  ],
  createUpdateProfile
);

// @route    DELETE api/profile
// @desc     Delete profile, user & posts
// @access   Private
router.delete('/', auth, deleteProfileAndUser);

// @route    PUT api/profile/experience
// @desc     Add profile experience
// @access   Private
router.put(
  '/experience',
  [
    auth,
    [
      check('title', 'Title is required').not().isEmpty(),
      check('company', 'Company is required').not().isEmpty(),
      check('from', 'From date is required').not().isEmpty(),
    ],
  ],
  updateProfileExperience
);

module.exports = router;
