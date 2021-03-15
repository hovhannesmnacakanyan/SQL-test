const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
