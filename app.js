var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./app/routes/users');


var app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {extensions:"html"}));


app.get("/", function(req,res) {
    res.send("You hit the standard route");
   
});


//this route is not really used, good for testing
app.use('/users', usersRouter);


require("./app/routes/routes.js")(app);


module.exports = app;
