var mongoose = require("../../database.js");
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
    experience: [
        {
            workExperience: String,
            aboutDescription: String, 
            responsibilities: [
                {
                    responsibility: String,
                    responsibilityDescription: String
                }
            ]
        }
    ],

    award: {award: String, awardDescription: String},
    extras: {
        undergraduate: {
            undergradExtra1: {undergradExtra: String, extraDescription: String},
            undergradExtra2: {undergradExtra: String, extraDescription: String}, 
            undergradExtra3: {undergradExtra: String, extraDescription: String} 
        },
        graduate: {
            gradExtra1: {gradExtra: String, extraDescription: String},
            gradExtra2: {gradExtra: String, extraDescription: String},
            gradExtra3: {gradExtra: String, extraDescription: String}
        } 
        
    }
    
});


//initialize standard template
var siteConstructor = mongoose.model("site", siteSchema);
// exports.initializeData = initializeTestData;


module.exports = siteConstructor;




function initializeTestData(userName) {
    
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


