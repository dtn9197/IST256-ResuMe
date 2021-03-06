var siteConstructor = require("../models/site");




exports.postHomepage = function(req,res,next) {
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
  console.log("get homepage routehit");
  // console.log(res.body);
  //   res.render("homepage", {names: array});
  
  siteConstructor.findById("dtn5089", function(error,document) {
    if(document == null) {
      console.log("error occurred at get homepage route: ");
      console.log(error.messages);
      res.send("error occurred: " + error.messages);
    } else {
      console.log("homepage document retrieved");
      var pageData = document.homepage;
      res.render("homepage.ejs", {data: pageData});
    }
  });
  
  };



exports.postEducation = function(req,res,next) {
  
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




exports.postSkills = function(req,res,next) {
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
      // res.send(document.skills);
    }
  });
};




exports.postExperience = function(req,res,next) {
    console.log("post experience route hit");
    var pageData = JSON.parse(req.body.experience);
    console.log("data is:");
    console.log(pageData);

    siteConstructor.findByIdAndUpdate("dtn5089",{experience: pageData},{new: true}, function(error, document) {
      if (error) {
        console.log("error occurred");
        console.log(error.messages);
        res.send(error.messages);
      } else {
        console.log("update successful");
        res.redirect("/experience");
      }
  });
};

exports.getExperience = function(req,res,next) {
  console.log("getExperience route hit");

  siteConstructor.findById("dtn5089", function(error,document) {
    if(document == null) {
      console.log("error occur:");
      console.log(error.messages);
      res.send("error occurred: " + error.messages);
    } else {
      console.log("document retrieved");
      var pageData = document.experience;
      console.log(document.experience);
      res.render("Experience.ejs", {data: pageData});
      // res.send(document.skills);
    }
  });

};




exports.postAwards = function(req,res,next) {

  console.log("post award route hit");
    var pageData = JSON.parse(req.body.award);
    console.log("data is:");
    console.log(pageData);
    siteConstructor.findByIdAndUpdate("dtn5089",{award: pageData},{new: true}, function(error, document) {
      if (error) {
        console.log("error occurred");
        console.log(error.messages);
        res.send(error.messages);
      } else {
        console.log("update successful");
        res.redirect("awards");
      }
  });
  
};

exports.getAwards = function(req,res,next) {
  console.log("get award route hit");

  siteConstructor.findById("dtn5089", function(error,document) {
    if(document == null) {
      console.log("error occur:");
      console.log(error.messages);
      res.send("error occurred: " + error.messages);
    } else {
      console.log("document retrieved");
      var pageData = document.award;
      console.log(document.award);
      res.render("Awards.ejs", {data: pageData});
      // res.send(document.award);
    }
  });

};




exports.postExtras = function(req,res,next) {
    console.log("post extras route hit");
    var pageData = JSON.parse(req.body.extras);
    console.log("data is:");
    console.log(pageData);
    siteConstructor.findByIdAndUpdate("dtn5089",{extras: pageData},{new: true}, function(error, document) {
      if (error) {
        console.log("error occurred");
        console.log(error.messages);
        res.send(error.messages);
      } else {
        console.log("update successful");
        res.redirect("extras");
        
      }
  });

};

exports.getExtras = function(req,res,next) {
  console.log("get extras route hit");

  siteConstructor.findById("dtn5089", function(error,document) {
    if(document == null) {
      console.log("error occur:");
      console.log(error.messages);
      res.send("error occurred: " + error.messages);
    } else {
      console.log("document retrieved");
      var pageData = document.extras;
      console.log(document.extras);
      res.render("Extras.ejs", {data: pageData});
      // res.send(document.award);
    }
  });

};





//not implemented
exports.postProjects = function(req,res,next) {

};

exports.getProjects = function(req,res,next) {
  res.render("Projects.ejs");

};






/*these are test functions only*/
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

  




/* possible login feature*/
/**creates a unique MongoDB document representing a user based on
 * a userID typed into the input field on the express page(index.html)
 */
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


/**Possible login feature, not working */
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




/**really long function, this function creates dummy data and initialize a new
user instance based on the id provided
note: THE DATA CREATED HAS TO MATCH THE SCHEMA DEFINED IN site.js 
*/
//also, move this function to site.js if possible, this is not MVC

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
              skillDescription: "HTdsfdML is a markup languagdsfe......"
          },
          {
              skill: "Java",
              skillDescription: "HTdsfsdfML is a markup languasdfge......"
          },
          {
              skill: "javascriptL",
              skillDescription: "HTdsfdsfML is a markup language......"
          },
          {
              skill: "business",
              skillDescription: "HdsfdsTML isdsfds a markup language......"
          },
          {
              skill: "something",
              skillDescription: "dsfds is a sdfdsfmarkup language......"
          },
          {
              skill: "piano",
              skillDescription: "HdsfsdfdML is a sdfdsfmarkup language......"
          },
          {
              skill: "mvc",
              skillDescription: "HdsfL is a markup sdlanguage......"
          },
          {
              skill: "photoshop",
              skillDescription: "Hdsfdsfdsfds is a markup language......"
          },
      ];
  
      var experience = 
      {
        workExperience1: {
            employerName: "Turkey Hill",
            aboutDescription: "Gas Station",
            tasks: [
                {
                task: "Sales",
                taskDescription: "Sales Experience"
                },
                {
                  task: "Retail",
                  taskDescription: "customer service"
                },
                {
                  task: "stock inventory",
                  taskDescription: "heavy lift"
                },
                {
                  task: "answer phone",
                  taskDescription: "efficientdsf"
                },
                {
                  task: "training",
                  taskDescription: "have to train new employees"
                }
            ]

        },
        workExperience2: {
            employerName:"Pennstate",
            aboutDescription: "public school",
            tasks: [
                {
                task: "Teaching assiatnt",
                taskDescription: "Sales Experience"
                },
                {
                  task: "study group",
                  taskDescription: "help student study"
                },
                {
                  task: "organize events",
                  taskDescription: "school involvement"
                },
                {
                  task: "production specialist",
                  taskDescription: "Smanage video"
                },
                {
                  task: "IT suppprot",
                  taskDescription: "Shelpdesk"
                }
            ]
        },

      };
  
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
              console.log(site);
          }
      });
  }