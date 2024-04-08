const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    dob: Date,
    number: Number,
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other']
      },
    password:String
});

module.exports = mongoose.model("users", userSchema);