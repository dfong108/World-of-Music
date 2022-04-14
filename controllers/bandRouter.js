const express = require('express');
const router = express.Router();
const Bands = require('../db/models/bandModel');

router.get('/', (req, res) => {
    res.send('BANDS')
})






module.exports = router;