const db = require('./db');
const router = require('express').Router();
const controller = require('./controllers/controllers');

router.post('/movies', controller.movies.post);

router.get('/movies', controller.movies.get);

module.exports = router;