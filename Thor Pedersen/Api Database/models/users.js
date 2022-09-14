var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var user = new Schema({
    firstName: { type: String, trim: true, required: true },
    lastName: { type: String, trim: true, required: true },
    emailId: {
        type: String, trim: true, required: true, unique: true
    },
    password: { type: String },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("user", user);