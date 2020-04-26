var mongoose = require("../../database.js");
//define MongoDB database schema
//each unique user represents an instance of this data schema with a unique userid
//data inside each page on the site represents a property of this user instance
/**NOTE: the only available user will always be "dtn5089" since there might
 * not be enough time to implement an authentication system
 */
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



var siteConstructor = mongoose.model("site", siteSchema);

module.exports = siteConstructor;







