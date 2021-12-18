const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')



router.get('/me', auth, (req, res) => res.send('Profile route'))

module.exports = router