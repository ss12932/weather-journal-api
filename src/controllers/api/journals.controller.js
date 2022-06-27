const getJournals = (req, res) => {
  console.log(req.db);
  res.send('getJournals');
};
const getJournal = (req, res) => {
  res.send('getJournal');
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
