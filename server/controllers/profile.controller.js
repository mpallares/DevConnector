const Profile = require('../models/Profile');
const User = require('../models/User');

const getCurrentUserProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile)
  } catch (err) {
    console.error(err);
  }
};

module.exports = getCurrentUserProfile;
