var mongoose = require("../database.js");

var siteSchema =  new mongoose.Schema({
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
    extras: {undergraduate: String, extras: [{extraName: String, extraDescription: String}]},
});

var siteConstructor = mongoose.model("site", siteSchema);

module.exports = siteConstructor;

