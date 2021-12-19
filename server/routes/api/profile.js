const express = require('express');
const router = express.Router();
const {
  getUserIdProfile,
  getAllProfiles,
  getCurrentUserProfile,
  createUpdateProfile,
} = require('../../controllers/profile.controller');
const auth = require('../../middleware/auth');
const { check } = require('express-validator');

router.get('/', getAllProfiles)

router.get('/user/:user_id', getUserIdProfile)

router.get('/me', auth, getCurrentUserProfile);

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

module.exports = router;
