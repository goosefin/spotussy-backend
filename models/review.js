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
    username: {type: String}
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review