var express = require('express');
var router = express.Router();


var homepageConstructor = require("../models/homePage");

var aboutMe = new homepageConstructor({
    aboutMe: "Hello"
});

aboutMe.save(function(error, content) {
    if(error)
        console.log("an error occured");
    else
        console.log("content saved");
        console.log("content");
        console.log("content is of type: " +  typeof(content));
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('homepage.html', { title: 'homepage' });
  });
  
module.exports = router;