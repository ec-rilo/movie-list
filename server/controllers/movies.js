const models = require('../models/models');

module.exports = {

  get: (req, res) => {
    models.movieData.retrieve(req.body.title, (err, result) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.json(result);
      }
    });
  },

  post: (req, res) => {
    models.movieData.create(req.body, (err, results) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201);
      }
    });
  }

};