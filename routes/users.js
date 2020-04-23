var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var array = ["Dylan", "Bob"];
  res.render("ejsTemplate.ejs", {names: array });
});



module.exports = router;
