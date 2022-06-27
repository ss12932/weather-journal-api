const dbMiddleware = (db) => {
  return (req, res, next) => {
    //mutate req obj and add db and then call next to pass control to next mw
    req.db = db;
    next();
  };
};
module.exports = dbMiddleware;
