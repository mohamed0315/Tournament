const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    userName: {
        type : String,
        required: true,
    },
    userPassword: {
        type: String,
        required: true,
    },
})

const user = mongoose.model("User",userSchema)

module.exports = user;