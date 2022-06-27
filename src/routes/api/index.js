const { Router } = require('express');

const search = require('./search.router');
const journals = require('./journals.router');

const router = Router(); //returns a class

router.use('/search', search);
//register route to this router. when req comes for this, want to fwd this req to next routing table.
router.use('/journals', journals);
//register route to this router. when req comes for this, want to fwd this req to next routing table.
module.exports = router;
