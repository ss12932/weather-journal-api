const getCitiesFromJournal = async (req, res) => {
  try {
    console.log(req.params);
    const { journalId } = req.params;

    const [cities] = await req.db.query(
      'SELECT * FROM cities WHERE journalId=?',
      [journalId]
    );
    return res.json({ success: true, data: cities });
  } catch (err) {
    console.log(`[ERROR]: Failed to get cities for journal| ${err.message} `);
    //it has to return rsp back, something fails, see msg but get stuck. send back with status code + msg. but dont want to expose error.message, inner error msging to client. why it failed. internal log you will see, return back to client.
    return res.status(500).json({
      success: false,
      error: 'Failed to get cities for journal',
    });
  }
};
const addCityToJournal = async (req, res) => {
  try {
    //extract payload, next make db request
    const payLoad = req.body;
    // console.log(payLoad);
    const { journalId } = req.params;

    await req.db.query(
      'INSERT INTO cities (journalId, cityName, temperature, humidity, windSpeed, weatherDescription, countryCode) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [
        journalId,
        payLoad.name,
        payLoad.temperature,
        payLoad.humidity,
        payLoad.windSpeed,
        payLoad.description,
        payLoad.countryCode,
      ]
    );

    return res.json({
      success: true,
    });
    //if receive response createJournal, route works and controller is working as intended
  } catch (err) {
    console.log(`[ERROR]: Failed to add city to journal | ${err.message} `);
    return res.status(500).json({
      success: false,
      error: 'Failed to add city to journal',
    });
  }
};
const removeCityFromJournal = async (req, res) => {
  try {
    const { journalId, cityId } = req.params;

    await req.db.query('DELETE FROM cities WHERE journalId=? AND id=?', [
      journalId,
      cityId,
    ]);
    return res.json({ success: true });
  } catch (err) {
    console.log(`[ERROR]: Failed to delete city from journal| ${err.message} `);
    //it has to return rsp back, something fails, see msg but get stuck. send back with status code + msg. but dont want to expose error.message, inner error msging to client. why it failed. internal log you will see, return back to client.
    return res.status(500).json({
      success: false,
      error: 'Failed to delete city from journal',
    });
  }
};
module.exports = {
  getCitiesFromJournal,
  addCityToJournal,
  removeCityFromJournal,
};
