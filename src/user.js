const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gmail:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('user', userSchema);