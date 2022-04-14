const express = require('express');
const router = express.Router();
const Venues = require('../db/models/venueModel');

router.get('/', (req, res) => {
    res.send('VENUES')
})






module.exports = router;