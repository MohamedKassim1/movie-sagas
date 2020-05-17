const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;
const movieRouter = require('./routes/movies.router');
const categoryRouter = require('./routes/category.router')
const editDetails = require('./routes/edit.router')
// const categoryRouter = require('./routes/movies.router');
/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));

/** ---------- ROUTES ---------- **/
app.use('/movies' , movieRouter);
app.use('/genres', categoryRouter);
app.use('/edit', editDetails);
/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});