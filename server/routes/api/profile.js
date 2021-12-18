const express = require('express');
const router = express.Router();
const getCurrentUserProfile = require('../../controllers/profile.controller');
const auth = require('../../middleware/auth');

router.get('/me', auth, getCurrentUserProfile);

module.exports = router;
