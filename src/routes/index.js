const { Router } = require('express');
const api = require('./api'); //index.js quirk, will automatically look for index.js entry pt. no need to be explicit with path. aka './api/index.js'; node will look for index.js by default.
const router = Router(); //returns a class
router.use('/api', api);
//register route to this router. when req comes for this, want to fwd this req to next routing table.

module.exports = router;
