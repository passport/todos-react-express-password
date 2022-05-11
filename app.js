const express = require('express');
const logger = require('morgan');

const app = express();

const authRouter = require('./routes/auth');

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(__dirname));

app.use('/', authRouter);

module.exports = app;
