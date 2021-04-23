const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    status: String,
    email: {
        type: String,
        required: [true, "username is required"]
    },
    password: {
        type: String,
        required: [true, "password is required"]
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;