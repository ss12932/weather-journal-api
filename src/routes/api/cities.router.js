const { Router } = require('express');
const {
  getCitiesFromJournal,
  addCityToJournal,
  deleteCityFromJournal,
} = require('../../controllers/api/cities.controller');
const router = Router(); //returns a class

router.get('/', getCitiesFromJournal);
router.post('/', addCityToJournal);
router.delete('/:id', deleteCityFromJournal);

module.exports = router;
