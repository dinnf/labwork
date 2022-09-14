'use strict';
var Mongoose = require('mongoose');
const uri = process.env.uri || "mongodb://root:testMongo123@192.168.178.3:27017/myFirstDatabase?authSource=admin";
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
//Mongoose.set('useCreateIndex', true);
//Mongoose.set('useFindAndModify', false);

//Connect to MongoDB
Mongoose.connect(uri, mongooseOptions, function (err) {
    if (err) {
        console.log("DB Error: ", err);
        process.exit(1);
    } else {
        console.log('MongoDB Connected');
    }
});
exports.Mongoose = Mongoose;