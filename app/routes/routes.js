module.exports = (app) => {
  const siteConstructor = require("../controllers/controller.js");
  
  /**Each page has a get and post route */
  app.get("/homepage",siteConstructor.getHomepage);
  app.post("/homepage",siteConstructor.postHomepage);

  app.post("/education",siteConstructor.postEducation);
  app.get("/education",siteConstructor.getEducation);

  app.post("/skills",siteConstructor.postSkills);
  app.get("/skills",siteConstructor.getSkills);

  app.post("/experience",siteConstructor.postExperience);
  app.get("/experience",siteConstructor.getExperience);

  app.post("/awards",siteConstructor.postAwards);
  app.get("/awards",siteConstructor.getAwards);

  app.post("/extras",siteConstructor.postExtras);
  app.get("/extras",siteConstructor.getExtras);

  app.post("/projects",siteConstructor.postProjects);
  app.get("/projects",siteConstructor.getProjects);




  /**possible login features, not fully working */
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