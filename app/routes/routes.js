module.exports = (app) => {
  const siteConstructor = require("../controllers/controller.js");
  
  app.get("/homepage",siteConstructor.get);
  // app.post("/createAccount",siteConstructor.create);
  // app.post("/login",siteConstructor.login);
  app.post("/homepage",siteConstructor.loadHomepage);
  // app.get("/ejs", siteConstructor.ejs);


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