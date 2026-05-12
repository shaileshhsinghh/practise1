const express = require('express');
const router = express.Router();
const {testing,authentication,compareauth} = require('../controllers/testingcontroller');
const authcheck = require('../middlewares/authcheck');
const getprofile = require('../controllers/getprofile');
const newpost = require('../controllers/newpost');

router.get('/test',testing);

router.post('/register',authentication);

router.get('/login',compareauth);

router.get('/profile',authcheck , getprofile);

router.post('/create',authcheck,newpost);

module.exports = router;