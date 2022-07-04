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
//not passing params from one router to another router. can access id here because its end get put and get. but we want router to pass id from parent router to child router. cities.js have id in journals.router.js and id in cities.router.js
router.use('/:journalId/cities', cities);

module.exports = router;
