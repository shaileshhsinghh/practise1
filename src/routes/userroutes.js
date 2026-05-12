const express = require('express');
const router = express.Router();
const {testing,authentication,compareauth} = require('../controllers/testingcontroller');

router.get('/test',testing);

router.post('/register',authentication);

router.get('/login',compareauth);

module.exports = router;