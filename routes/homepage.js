var express = require('express');
var router = express.Router();


var siteConstructor = require("../models/site");

var homepage = {
    aboutMe: "Hello";
}
var education ={
    schoolTitle: "PennState",
    aboutSchool: "Not Much here",
    major: "IST",
    minor: "SRA",
    undergraduate: "random stuff",
    graduate: "more random text",
},

var skills = [{skill: "HTML", skillDescription: "HTML is a markup language......"}];



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('homepage', { title: 'homepage' });
  });
  
module.exports = router;