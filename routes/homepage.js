var express = require('express');
var router = express.Router();
var siteConstructor = require("../models/site");



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('homepage', { title: 'homepage' });
  });

router.post("/", function(req,res,next) {
    var aboutMeContent = req.body.aboutMeContent;
    
    
    // console.log(aboutMeContent);
    // console.log(req.headers);
    siteConstructor.findByIdAndUpdate("dtn5089", {
      homepage: {aboutMe: aboutMeContent}
    },{new: true}, function(error, document) {
        if (error) {
          console.log("error occurred");
          console.log(error.messages);
        } else {
          console.log("update successful");
          res.send(document.homepage);
        }
    });
    // siteConstructor.findById("dtn5089", function(error, document) {
    //   if (document == null) {
    //     console.log("document not found");
    //   }
    //   else {
    //     console.log("document founded");
    //     console.log(document.homepage);
    //   }
    // });

  })
  
module.exports = router;





// siteConstructor.findById("dtn5089", function(error, document) {
    //   if (document == null) {
    //     console.log("document not found");
    //   }
    //   else {
    //     console.log(document.education.aboutSchool);
    //     console.log("document data type is: " + typeof document);
    //   }
    // });