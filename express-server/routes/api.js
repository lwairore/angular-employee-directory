const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// GET api listing.
router.get('/', (req, res) => {
    res.send('api works');
});

module.exports = router;
