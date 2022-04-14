const express = require('express');
const router = express.Router();
const Events = require('../db/models/eventModel');

router.get('/', (req, res) => {
    res.send('EVENTS')
})






module.exports = router;