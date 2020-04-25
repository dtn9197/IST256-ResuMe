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
exports.getHomepage = function(req, res, next) {
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
      console.log("homepage document retrieved");
      var pageData = document.homepage;
      res.render("homepage.ejs", {data: pageData});
    }
  });
  
  };

exports.loadEducation = function(req,res,next) {
  
  // console.log(aboutMeContent);
  // console.log(req.headers);
  console.log("printing body: " + req.body.educationData);
  // console.log(req);
  //remember to parse json string
  var data = JSON.parse(req.body.educationData);
  
  siteConstructor.findByIdAndUpdate("dtn5089",{education: data},{new: true}, function(error, document) {
      if (error) {
        console.log("error occurred");
        console.log(error.messages);
      } else {
        console.log("update successful");
        res.redirect("education");
      }
  });


};

exports.getEducation = function(req,res,next) {
  console.log("getEducation route hit");

  siteConstructor.findById("dtn5089", function(error,document) {
    if(document == null) {
      console.log("error occur:");
      console.log(error.messages);
      res.send("error occurred: " + error.messages);
    } else {
      console.log("document retrieved");
      var pageData = document.education;
      console.log(document.education);
      res.render("Education.ejs", {data: pageData});
    }
  });

};

exports.loadSkills = function(req,res,next) {
  console.log("printing body: " + req.body.skillsData);
  var data = JSON.parse(req.body.skillsData);
  
  siteConstructor.findByIdAndUpdate("dtn5089",{skills: data},{new: true}, function(error, document) {
      if (error) {
        console.log("error occurred");
        console.log(error.messages);
      } else {
        console.log("update successful");
        res.redirect("skills");
      }
  });


};

exports.getSkills = function(req,res,next) {
  console.log("getSkills route hit");

  siteConstructor.findById("dtn5089", function(error,document) {
    if(document == null) {
      console.log("error occur:");
      console.log(error.messages);
      res.send("error occurred: " + error.messages);
    } else {
      console.log("document retrieved");
      var pageData = document.skills;
      console.log(document.skills);
      res.render("Skills.ejs", {data: pageData});
    }
  });


};

exports.loadExperience = function(req,res,next) {

};

exports.getExperience = function(req,res,next) {
  res.render("Experience.ejs");

};

exports.loadAwards = function(req,res,next) {

};

exports.getAwards = function(req,res,next) {
  res.render("Awards.ejs");

};

exports.loadExtras = function(req,res,next) {

};

exports.getExtras = function(req,res,next) {
  res.render("Extras.ejs");

};

exports.loadProjects = function(req,res,next) {

};

exports.getProjects = function(req,res,next) {
  res.render("Projects.ejs");

};


/*these are test functions*/
exports.postEJS = function(req,res,next) {
  var array = ["Bob", "Dylan", "George"];
  console.log("ejs get route hit");
  res.render("ejsTemplate.ejs",{names: array});

};

exports.getEJS = function(req,res,next) {
  var array = ["Bob", "Dylan", "George"];
  console.log("ejs post route hit");
  res.render("ejsTemplate.ejs",{names: array});

};

  




//testroute
// exports.ejs = function(req, res,next) {
//   // var array = ["Dylan", "Bob", "tim", "Alan"];
//   res.render("ejsTemplate.ejs", {names: array });
//   // res.render("homepage", {names: array});
// };


/* possible login*/
//post route create account
exports.create = function(req,res,next) {
  var userName = req.body.userName;
  console.log("createAccount route hit");
  console.log(userName);
  siteConstructor.findById(userName, function(error,document) {
    if(document == null) {
        console.log("couldn't find document");
        createUserInstance(userName);
        console.log("account created");
        res.send("account created");
        //redirect here
    }
    else {
        console.log("document already initialized");
        res.send("account already exists");
    }    
});
}

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

    function createUserInstance(userName) {
    
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
  
      var extras = {
          undergraduate: {
              undergradExtra1: {undergradExtra: "undergrad1", extraDescription: "description1"},
              undergradExtra2: {undergradExtra: "undergrad2", extraDescription: "description2"}, 
              undergradExtra3: {undergradExtra: "undergrad3", extraDescription: "description3"} 
          },
          graduate: {
              gradExtra1: {gradExtra: "gradEextra1", extraDescription: "gradescription1"},
              gradExtra2: {gradExtra: "gradEextra2", extraDescription: "gradescription2"},
              gradExtra3: {gradExtra: "gradEextra3", extraDescription: "gradescription3"}
          } 
          
      }
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