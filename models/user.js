const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    atmosphere: {type: Number, required: true},
    gay: {type:Boolean},
    lesbian: {type:Boolean},
    queer: {type:Boolean},
    music: [{type:String}],
    entertainment: [{type:String}],
    gender_neutral_bathrooms: {type:Boolean},
    pricing: {type: Number, required:true},
    comment: {type:String, required:true},
    username: {type: String},
    spotussy: {type: String}
})

const userSchema = new mongoose.Schema({
    first_name: {type:String, required:true},
    last_name: {type:String, required:true},
    email: {type:String, requires:true},
    password: {type:String, required:true},
    reviews: [reviewSchema]
})

const User = mongoose.model('User',userSchema)

module.exports = User