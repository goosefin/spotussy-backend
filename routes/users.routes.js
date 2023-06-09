const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.post('/signup', ctrls.users.signUp); 

router.post('/signin', ctrls.users.signIn);

router.get('/signout', ctrls.users.signOut);

router.post('/', ctrls.users.create); 

router.put('/:id', ctrls.users.update);

router.delete('/:id', ctrls.users.destroy);

module.exports = router