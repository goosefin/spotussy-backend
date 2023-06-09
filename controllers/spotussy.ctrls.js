const db = require('../models')

const index = (req,res) =>{
    db.Spotussy.find({}, (err,spotussy) =>{
        if(err){
            return res.status(404).json({error:err.message})
        }else{
            return res.status(200).json({
                spotussy,
                requestedAt: new Date().toLocaleDateString
            })
        }
    })
}

module.exports = {
    index
}