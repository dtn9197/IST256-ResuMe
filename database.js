var mongoose = require("mongoose");
mongoose.connect("mongodb+srv://becca2:ist256@cluster0-70x7r.mongodb.net/ResumeProject?retryWrites=true&w=majority", { useNewUrlParser: true }, function(error) {
    if(error)
        console.log("something went wrong at database access");
    else
        console.log("connected");
});
// mongoose.connect("mongodb+srv://duyMongoDB:ist256@cluster0-niapp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true }, function(error) {
//     if(error)
//         console.log("something went wrong at database access");
//     else
//         console.log("connected");
// });



module.exports = mongoose;
