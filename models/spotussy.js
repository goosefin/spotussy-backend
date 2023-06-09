const mongoose = require('mongoose');

const spotussySchema = new mongoose.Schema({
    name: {type:String},
    address: {type:String, requires:true},
    borough: {type: String, required:true},
    image: {type: String},
    atmosphere: {type: Number},
    gay: {type:Boolean},
    lesbian: {type:Boolean},
    queer: {type:Boolean},
    music: [{type:String}],
    entertainment: [{type:String}],
    gender_neutral_bathrooms: {type:Boolean},
    pricing: {type: Number},
    comments: [{type:String}],
})

const Spotussy = mongoose.model('Spotussy', spotussySchema)

module.exports = Spotussy