const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.post('/spotussy/signup', ctrls.users.signUp); 

router.post('/spotussy/signin', ctrls.users.signIn);

router.get('/spotussy/signout', ctrls.users.signOut);

router.post('/spotussy', ctrls.users.create); 

router.put('/spotussy/:id', ctrls.users.update);

router.delete('/spotussy/:id', ctrls.users.destroy);

module.exports = router