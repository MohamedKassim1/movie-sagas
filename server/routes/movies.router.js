const express = require('express');
const pool = require('../modules/pool');

const movieRouter = express.Router();

movieRouter.get('/', (req, res) => {
  let query = 'SELECT * FROM "movies"';
  pool.query(query).then( result => {
    res.send(result.rows);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})

module.exports = movieRouter;