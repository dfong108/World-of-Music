const express = require('express');
const router = express.Router();
const Bands = require('../db/models/bandModel');

function displayIndex(req, res) {
    Bands.find({}, {name:1})
        .then((band) => res.json(band))
        .catch((err) => res.json(err))
}

// --- CREATE ---
router.post('/', (req, res) => {
    Bands.create(req.body)
        .then(() => displayIndex(req, res))
        .catch((err) => res.json(err))
})

// --- READ ---
router.get('/', (req, res) => {
    displayIndex(req, res)
})

// --- UPDATE ---
router.put('/:id', (req, res) => {
    const id = req.params.id
    Bands.findByIdAndUpdate({_id: id}, req.body)
        .then(() => displayIndex(req, res))
        .catch((err) => console.log(err))
})

// --- DELETE ---
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Bands.findByIdAndDelete(id)
        .then(displayIndex(req, res))
        .catch((err) => res.json(err))
})




module.exports = router;