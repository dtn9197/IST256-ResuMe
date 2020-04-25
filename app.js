var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');

// var indexRouter = require('./routes/index');
var homepageRouter = require('./app/routes/routes');
var usersRouter = require('./app/routes/users');
// var homepageRouter = require('.routes/homepage.js');

var app = express();
// app.set("views", "ejs");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, 'public'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'), {extensions:"html"}));

// app.use('/', homepageRouter);
app.get("/", function(req,res) {
    res.send("You hit the standard route");
    // res.render("ejsTemplate.ejs", {x: 5},function(error, string) {
    //     if(error)
    //         console.log("render failed");
    //     else
    //         console.log("render successful");
    // });
});

app.use('/users', usersRouter);
// app.use("/homepage", homepageRouter);

require("./app/routes/routes.js")(app);


module.exports = app;
