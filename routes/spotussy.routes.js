const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/spotussy', ctrls.spotussys.index);

module.exports = router