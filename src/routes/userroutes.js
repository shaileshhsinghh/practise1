const express = require('express');
const router = express.Router();
const {testing} = require('../controllers/testingcontroller');

router.get('/test',testing);

module.exports = router;