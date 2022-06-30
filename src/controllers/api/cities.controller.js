const getCitiesFromJournal = async (req, res) => {
  try {
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
const addCityToJournal = (req, res) => {
  res.send('addCityToJournal');
};
const deleteCityFromJournal = (req, res) => {
  res.send('deleteCityFromJournal');
};
module.exports = {
  getCitiesFromJournal,
  addCityToJournal,
  deleteCityFromJournal,
};
