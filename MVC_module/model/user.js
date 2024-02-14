const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        // required :false,
    },
    email: {
        type: String,
        // required: true,
        // unique: true,
    },
    jobTitle: {
        type: String,
    },
    gender: {
        type: String,
    },

}, { timestamps: true });


//          creating a model
const User = new mongoose.model('user', userSchema)


//                                              Export
module.exports= User;