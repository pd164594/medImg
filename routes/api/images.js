const express = require('express');
const router  = express.Router();


// @route:   GET api/image_viewers/
// @desc:    Test image viewers api route 
// @acccess: Public
router.get('/test', (req, res) => {
  res.json({msg: 'viewer works'})
});

module.exports = router;