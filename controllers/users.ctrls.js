const db = require('../models')
const bcrypt = require('bcrypt')
const session = require('express-session')

const signUp = (req,res) =>{
    const salt = bcrypt.genSaltSync(10)
    req.body.password = bcrypt.hashSync(req.body.password, salt)
    db.User.findOne({username:req.body.username}, (err,userExists) =>{
        if(err){
            res.status(404).json({error:err.message})
        }
        if(userExists){
            res.redirect('/spotussy/login')
        } else {
            db.User.create(req.body, (err,createdUser) =>{
                if(err){
                    return res.status(404).json({error:err.message})
                } else {
                    return res.status(200).json({user: createdUser})
                }
            })
        }
    })
}

const signIn = (req,res) =>{
    db.User.findOne({email:req.body.email}, (err,foundUser) =>{
        if(err){
            return res.status(404).json({error: err.message})
        }else{
            if(foundUser){
                const validLogin = bcrypt.compareSync(req.body.password, foundUser.password)
                if(validLogin){
                    return res.status(200).json({foundUser})
                }else{
                    return res.status(404).json({error: 'Log in failed'})
                }
            }
        }
    })
}

const signOut = (req,res) =>{
    req.session.destroy()
}

const create = (req,res) =>{
    db.User.reviews.create(req.body, (err, createdReview) =>{
        if(err){
            console.log(err)
            return res.status(404).json({error: err.message})
        }else{
            return res.status(200).json({review:createdReview}) 
        }
    })
}

const destroy = (req,res) =>{
    db.User.reviews.findByIdAndDelete(req.params.id, (err, deletedReview) =>{
        if(err){
            return res.status(400).json({error: err.message})
        }
        if(!deletedReview){
            return res.status(400).json({error: 'Review not found'})
        }else{
            return res.status(200).json({message:`${deletedReview.id} deleted successfully`}) 
        }
    })
}

const update = (req,res) =>{
    db.User.reviews.findByIdAndUpdate(req.params.id,
        {
            $set:req.body
        },
        {new: true},
        (err,updatedReview) =>{
            if(err){
                return res.status(400).json({error: err.message})
            }else{
                return res.status(200).json(updatedReview)
            }
        })
}

module.exports = {
    signUp,
    signIn,
    signOut,
    create,
    destroy,
    update
}