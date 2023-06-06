const mongoose = require('mongoose');
import Review from './review'

const spotussySchema = new mongoose.Schema({
    address: {type:String, requires:true},
    borough: {type: String, required:true},
    image: {type: String},
    reviews: [{type: Review, default:{}}]
})

const Spotussy = mongoose.model('Spotussy', spotussySchema)

module.exports = Spotussy