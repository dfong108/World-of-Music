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
router.get('/new', (req, res) => {
    res.render('venues/new_venue.ejs')
})
router.post('/', (req, res) => {
    Venues.create(req.body)
        // .then(() => displayIndex(req, res)) ----> Testing
        .then(() => res.redirect('/venues'))
        .catch((err) => res.json(err))
})

// --- READ ---
router.get('/', (req, res) => {
    // displayIndex(req, res) ----> Testing
    Venues.find({})
        .then((venues) => res.render('venues/venues_index.ejs', {allVenues: venues}))
        .catch((err) => res.json(err))
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    Venues.findById(id)
        .then((venue) => res.render('venues/show_venue.ejs', venue))
})


// --- UPDATE ---
router.get('/:id/edit', (req, res) => {
    const id = req.params.id
    Venues.findById(id)
        .then((venue) => res.render('venues/edit_venue.ejs', venue))
})


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