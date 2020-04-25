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
    experience: {
        workExperience1: {
            employerName: String,
            aboutDescription: String, 
            tasks: [
                {
                    task: String,
                    taskDescription: String
                }
            ]
        },
        workExperience2: {
            employerName: String,
            aboutDescription: String, 
            tasks: [
                {
                    task: String,
                    taskDescription: String
                }
            ]
        }
    },
    

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







