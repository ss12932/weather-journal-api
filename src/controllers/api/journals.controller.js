const getJournals = async (req, res) => {
  try {
    //fetch all journals from DB
    const [journals] = await req.db.query('SELECT * FROM journals');
    console.log(req.db);
    //use .json() instead of .send() not string, sending back json as rsp
    // res.send('getJournals');
    return res.json({ success: true, data: journals });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Journals | ${error.message} `);
    //it has to return rsp back, something fails, see msg but get stuck. send back with status code + msg. but dont want to expose error.message, inner error msging to client. why it failed. internal log you will see, return back to client.
    return res.status(500).json({
      success: false,
      error: 'Failed to get Journals',
    });
  }
};
const getJournal = async (req, res) => {
  try {
    //returning id sicne we parameterized the route. creates key of id in req obj.
    const { id } = req.params;
    const [journal] = await req.db.query('SELECT * FROM journals WHERE id=?', [
      id,
    ]);
    return res.json({ success: true, data: journal });
  } catch (err) {
    console.log(`[ERROR]: Failed to get Journal | ${err.message} `);
    return res.status(500).json({
      success: false,
      error: 'Failed to get Journal',
    });
  }
};
const createJournal = (req, res) => {
  res.send('createJournal');
};
const updateJournal = (req, res) => {
  res.send('updateJournal');
};
const deleteJournal = (req, res) => {
  res.send('deleteJournal');
};
module.exports = {
  getJournals,
  getJournal,
  createJournal,
  updateJournal,
  deleteJournal,
};
