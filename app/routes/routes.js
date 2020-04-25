module.exports = (app) => {
  const siteConstructor = require("../controllers/controller.js");
  
  app.get("/homepage",siteConstructor.getHomepage);
  app.post("/homepage",siteConstructor.loadHomepage);

  app.post("/education",siteConstructor.loadEducation);
  app.get("/education",siteConstructor.getEducation);

  app.post("/skills",siteConstructor.loadSkills);
  app.get("/skills",siteConstructor.getSkills);

  app.post("/experience",siteConstructor.loadExperience);
  app.get("/experience",siteConstructor.getExperience);

  app.post("/awards",siteConstructor.loadAwards);
  app.get("/awards",siteConstructor.getAwards);

  app.post("/extras",siteConstructor.loadExtras);
  app.get("/extras",siteConstructor.getExtras);

  app.post("/projects",siteConstructor.loadProjects);
  app.get("/projects",siteConstructor.getProjects);
  app.post("/createAccount",siteConstructor.create);
  // app.post("/login",siteConstructor.login);
  

  //test functions only
  app.post("/ejs", siteConstructor.postEJS);
  app.get("/ejs", siteConstructor.getEJS);


}







// siteConstructor.findById("dtn5089", function(error, document) {
    //   if (document == null) {
    //     console.log("document not found");
    //   }
    //   else {
    //     console.log(document.education.aboutSchool);
    //     console.log("document data type is: " + typeof document);
    //   }
    // });