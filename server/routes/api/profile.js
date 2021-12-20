const express = require('express');
const router = express.Router();
const {
  getUserRepos,
  deleteProfileEdu,
  addProfileEdu,
  deleteProfileExp,
  addProfileExp,
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
  addProfileExp
);

// @route    DELETE api/profile/experience/:exp_id
// @desc     Delete experience from profile
// @access   Private
router.delete('/experience/:exp_id', auth, deleteProfileExp);


// @route    PUT api/profile/education
// @desc     Add profile education
// @access   Private
router.put(
  '/education',
  auth,
  check('school', 'School is required').notEmpty(),
  check('degree', 'Degree is required').notEmpty(),
  check('fieldofstudy', 'Field of study is required').notEmpty(),
  check('from', 'From date is required and needs to be from the past')
    .notEmpty()
    .custom((value, { req }) => (req.body.to ? value < req.body.to : true)),
  addProfileEdu
);


// @route    DELETE api/profile/education/:edu_id
// @desc     Delete education from profile
// @access   Private
router.delete('/education/:edu_id', auth, deleteProfileEdu);


// @route    GET api/profile/github/:username
// @desc     Get user repos from Github
// @access   Public
router.get('/github/:username', getUserRepos)

module.exports = router;
