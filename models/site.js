var mongoose = require("../database.js");
//create schema
var siteSchema =  new mongoose.Schema({
    _id: String,
    homepage: {
        aboutMe: String
    },
    education: {
        schoolTitle: String,
        aboutSchool: String,
        major: String,
        minor: String,
        undergraduate: String,
        graduate: String,
    },
    skills: [{skill: String, skillDescription: String}],
    experience: [{workExperience: String, aboutDescription: String, responsibilities: [{responsibility: String, responsibilityDescription: String}]}],
    award: {award: String, awardDescription: String},
    extras: {undergraduate: [{undergradExtra: String, extraDescription: String}], graduate: [{gradExtra: String, extraDescription: String}]}
    
});


//create test data
var siteConstructor = mongoose.model("site", siteSchema);
siteConstructor.findById("dtn5089", function(error,document) {
    if(document == null) {
        console.log("couldn't find document");
        initializeTestData();
    }
        
    else {
        console.log("document already initialized");
    }    
});


module.exports = siteConstructor;




function initializeTestData() {
    var _id = "dtn5089";
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


