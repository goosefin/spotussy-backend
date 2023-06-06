const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    first_name: {type:String, required:true},
    last_name: {type:String, required:true},
    email: {type:String, requires:true},
    password: {type:String, required:true},
    reviews: {type: Reviews, default: {}}
})

const User = mongoose.model('User',userSchema)

module.exports = User