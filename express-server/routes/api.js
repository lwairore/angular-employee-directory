const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

// MongoDB URL from the docker-compose file
const dbHost = 'mongodb://database/mean-docker';

// Connect to mongodb
mongoose.connect(dbHost);

// create mongoose schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});

// create mongoose model
const User = mongoose.model('User', userSchema);

// GET api listing.
router.get('/', (req, res) => {
    res.send('api works');
});

// GET all users.
router.get('/users', (req, res) => {
    User.find({}, (err, users) => {
        if (err) res.status(500).send(error)

        res.status(200).json(users);
    });
});

module.exports = router;
