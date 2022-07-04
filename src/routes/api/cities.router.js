const { Router } = require('express');
const {
  getCitiesFromJournal,
  addCityToJournal,
  removeCityFromJournal,
} = require('../../controllers/api/cities.controller');
const router = Router({ mergeParams: true }); //returns a class
//instruct router to merge all url params from parent router. place this config in child router. child router need access to paraent params

router.get('/', getCitiesFromJournal);
router.post('/', addCityToJournal);
router.delete('/:cityId', removeCityFromJournal);

module.exports = router;
