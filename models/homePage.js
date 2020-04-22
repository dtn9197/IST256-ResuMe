var mongoose = require("../database.js");

var homepageSchema =  new mongoose.Schema({
    aboutMe: String
});

var homepageConstructor = mongoose.model("homepage", homepageSchema);

module.exports = homepageConstructor;

