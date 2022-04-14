const express = require('express');
const router = express.Router();
const Venues = require('../db/models/venueModel');

function displayIndex(req, res) {
    // Venues.find({}, {"name": 1})
    Venues.find({}, {"name": 1, "location": 1})
        .then((data) => res.json(data))
        .catch((err) => res.json(err))
}

// --- CREATE ---
router.post('/', (req, res) => {
    Venues.create(req.body)
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
    Venues.findByIdAndUpdate(id, req.body)
        .then(() => displayIndex(req, res))
        .catch((err) => res.json(err))
})

// --- DELETE ---
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Venues.findByIdAndDelete(id)
        .then(() => displayIndex(req, res))
        .catch((err) => res.json(err))
})





module.exports = router;