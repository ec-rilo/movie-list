const db = require('../db');

module.exports = {
  retrieve: (data, callback) => {
    const query = 'SELECT * FROM Movies WHERE title = ?';

    db.query(query, [data], (err, res) => {
      callback(err, res);
    });
  },

  create: (data, callback) => {
    const query = 'INSERT INTO Movies VALUES (null, ?, ?, ?, ?, ?, ?)';
    const params = [
      data.title,
      data.release_date,
      data.runtime,
      data.metascore,
      data.imdb_rating,
      data.watched
    ];

    db.query(query, params, (err, result) => {
      callback(err, result);
    });
  }
}