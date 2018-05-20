const express = require('express');
const router  = express.Router();

// @route:   GET api/profile/
// @desc:    Test profile api route 
// @acccess: Public
router.get('/test', (req, res) => {
  res.json({msg: 'transaction works'})
});

module.exports = router;