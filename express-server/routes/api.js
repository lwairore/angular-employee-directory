const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// GET api listing.
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;
