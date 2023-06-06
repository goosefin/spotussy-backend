const mongoose = require('mongoose');
import Review from './review'

const userSchema = new mongoose.Schema({
    first_name: {type:String, required:true},
    last_name: {type:String, required:true},
    email: {type:String, requires:true},
    password: {type:String, required:true},
    reviews: {type: Review, default: {}}
})

const User = mongoose.model('User',userSchema)

module.exports = User