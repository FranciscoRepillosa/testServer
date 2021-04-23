const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
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

const User = mongoose.model('User', UserSchema);

UserSchema.pre("save", async function (next) {
        this.password = await bcrypt.hash(this.password, 12);
        
    next();
})

module.exports = User;