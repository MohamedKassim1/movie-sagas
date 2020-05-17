const express = require('express');
const pool = require('../modules/pool');

const categoryRouter = express.Router();

categoryRouter.get('/:id', (req, res) => {

  let id = req.params.id;
  console.log(id)
  let query = `SELECT name FROM movies JOIN movie_genre ON movies.id=movie_genre.movies_id
  JOIN genres ON movie_genre.genres_id=genres.id WHERE movies.id = $1`
  pool.query(query, [id]).then( result => {
      console.log(result.rows)
    res.send(result.rows);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})

module.exports = categoryRouter;