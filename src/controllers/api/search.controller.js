const axios = require('axios');

const getWeatherInfo = async (req, res) => {
  try {
    //extract payload, next make db request
    const { city } = req.body;
    // console.log(payLoad);
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`;

    const { data } = await axios.get(url);
    console.log(data);

    return res.json({
      success: true,
      data,
    });
    //if receive response createJournal, route works and controller is working as intended
  } catch (err) {
    console.log(
      `[ERROR]: Failed to fetch data from Weather API | ${err.message} `
    );
    return res.status(500).json({
      success: false,
      error: 'Failed to fetch data from Weather API',
    });
  }
};
module.exports = { getWeatherInfo };
