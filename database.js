var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://Duy:Dn09011997@cluster0-70x7r.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }, function(error) {
    if(error)
        console.log("something went wrong");
    else
        console.log("connected");
});

module.exports = mongoose;




