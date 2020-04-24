var siteConstructor = require("../models/site");




exports.loadHomepage = function(req,res,next) {
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
        // res.send(document.homepage);
        res.redirect("homepage");
      }
  });

};



/* GET userHomepage. */
exports.get = function(req, res, next) {
  var data;
  console.log("get route hit");
  // console.log(res.body);
  //   res.render("homepage", {names: array});
  siteConstructor.findById("dtn5089", function(error,document) {
    if(document == null) {
      console.log("error occurre: ");
      console.log(error.messages);
      res.send("error occurred: " + error.messages);
    } else {
      var pageData = document.homepage;
      res.render("homepage.ejs", {data: pageData});
    }
  });
  
  };




//testroute
// exports.ejs = function(req, res,next) {
//   // var array = ["Dylan", "Bob", "tim", "Alan"];
//   res.render("ejsTemplate.ejs", {names: array });
//   // res.render("homepage", {names: array});
// };


/* possible login*/
//post route create account
// exports.create = function(req,res,next) {
//   var userName = req.body.userName;
//   console.log("createAccount route hit");
//   console.log(userName);
//   siteConstructor.findById(userName, function(error,document) {
//     if(document == null) {
//         console.log("couldn't find document");
//         initializeTestData(userName);
//         // res.send("account created");
//         //redirect here
//     }
//     else {
//         console.log("document already initialized");
//         res.send("account already exists");
//     }    
// });
// }

// exports.login = function(req,res,next) {
//   var userName = req.body.userName;
//   console.log("login route hit");
//   console.log(userName);
//   siteConstructor.findById(userName, function(error,document) {
//     if(document == null) {
//         res.send("account does not exist");
//     }
//     else {
//         // res.send("account already exists");
//         //redirect here
//         // res.redirect("/:userName/homepage");
//         res.redirect("/:userName/homepage");
//     }    
// });
// }


  function initializeTestData(userName) {
    console.log("initialize data function ran");
    var _id = userName;
    var homepage = {
        aboutMe: "Hello"
    };

    var education ={
        schoolTitle: "PennState",
        aboutSchool: "Not Much here",
        major: "IST",
        minor: "SRA",
        undergraduate: "random stuff",
        graduate: "more random text",
    };

    var skills = [
        {
            skill: "HTML",
            skillDescription: "HTML is a markup language......"
        }
    ];

    var experience = [{workExperience: "Turkey Hill", aboutDescription: "Gas Station", responsibilities: [{responsibility: "Sales", responsibilityDescription: "Sales Experience"}]}];

    var award = {award: "Dean's List 2019", awardDescription: "HIGH GPA!!!"};

    var extras = {undergraduate: [{undergradExtra: "Involvement 1", extraDescription: "Club involvement"}], graduate: [{gradExtra: "ISTConsultant", extraDescription: "Extracurriculum"}]};
    var data = {
        _id: _id,
        homepage: homepage,
        education: education,
        skills: skills,
        experience: experience,
        award: award,
        extras: extras
    };
    var testSite = new siteConstructor(data);

    testSite.save(function(error, site) {
        if(error) {
            console.log("save failed");
            console.log(error);
        }
        else {
            console.log("save successful");
            console.log("the data saved is: /n");
            console.log(site.experience[0].responsibilities[0]);
        }
    });
}



 //login route
// exports.login = function(req,res,next) {
//   var userName = req.body.userName;
//   console.log("login route hit");
//   console.log(userName);
//   siteConstructor.findById(userName, function(error,document) {
//     if(document == null) {
//         console.log("couldn't find document");
//         initializeTestData(userName);
//         res.send("account does not exist");
//     }
//     else {
//         console.log("document already initialized");
//         res.send("account already exists");
//     }    
// });


  
    // siteConstructor.findById("dtn5089", function(error, document) {
    //   if (document == null) {
    //     console.log("document not found");
    //   }
    //   else {
    //     console.log("document founded");
    //     console.log(document.homepage);
    //   }
    // });