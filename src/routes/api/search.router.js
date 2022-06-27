const { Router } = require('express');
const { getWeatherInfo } = require('../../controllers/api/search.controller');
const router = Router(); //returns a class

router.post('/', getWeatherInfo);

module.exports = router;
