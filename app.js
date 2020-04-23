var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// var indexRouter = require('./routes/index');
var homepageRouter = require('./routes/homepage');
var usersRouter = require('./routes/users');
// var homepageRouter = require('.routes/homepage.js');

var app = express();
app.set("views", "ejs");
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {extensions:"html"}));

// app.use('/', homepageRouter);
app.use('/users', usersRouter);
app.use("/homepage", homepageRouter);


module.exports = app;
