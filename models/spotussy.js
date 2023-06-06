const mongoose = require('mongoose');

const spotussySchema = new mongoose.Schema({
    address: {type:String, requires:true},
    borough: {type: String, required:true},
    image: {type: String},
    reviews: [{type: Reviews, default:{}}]
})

const Spotussy = mongoose.model('Spotussy', spotussySchema)

module.exports = Spotussy