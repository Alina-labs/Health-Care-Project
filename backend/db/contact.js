const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    userid:String,
    name:String,
    email:String,
    number: Number,
    message:String
});

module.exports = mongoose.model("contacts", contactSchema);