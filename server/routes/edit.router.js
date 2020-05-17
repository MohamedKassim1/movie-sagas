const express = require('express');
const pool = require('../modules/pool');

const editDetails = express.Router();

editDetails.get('/', (req, res) => {
    
    let id = req.body.id;
    let title = req.body.title;
    let description = req.body.description;
    console.log('in edit', req.body);
  let query = 'UPDATE "movies" SET "title" = $1, "description" = $2 WHERE id = $3';
  pool.query(query, [title, description, id]).then( result => {
    res.send(result.rows);
  }).catch(err => {
    console.log(err);
    res.sendStatus(500);
  })
})

module.exports = editDetails;