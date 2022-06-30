const { Router } = require('express');
const cities = require('./cities.router');
const {
  getJournals,
  getJournal,
  createJournal,
  updateJournal,
  deleteJournal,
} = require('../../controllers/api/journals.controller');

const router = Router(); //returns a class

router.get('/', getJournals);
router.get('/:id', getJournal);
router.post('/', createJournal);
router.put('/:id', updateJournal);
router.delete('/:id', deleteJournal);

//if connect to another router, .use, not end of routing table.
router.use('/:journalId/cities', cities);

module.exports = router;
