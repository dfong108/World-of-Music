const express = require('express');
const router = express.Router();
const Venues = require('../db/models/venueModel');


// --- CREATE ---
    router.get('/new', (req, res) => {
        res.render('venues/new_venue.ejs')
    })
    router.post('/', (req, res) => {
        Venues.create(req.body)
            .then(() => res.redirect('/venues'))
            .catch((err) => res.json(err))
    })

// --- READ ---
    router.get('/', (req, res) => {
        Venues.find({})
            .then((venues) => res.render('venues/venues_index.ejs', {allVenues: venues}))
            .catch((err) => res.json(err))
    })
    router.get('/:id', (req, res) => {
        const id = req.params.id
        Venues.findById(id)
            .then((venue) => res.render('venues/show_venue.ejs', venue))
            .catch((err) => res.json(err))
    })

// --- UPDATE ---
    router.get('/:id/edit', (req, res) => {
        const id = req.params.id
        Venues.findById(id)
            .then((venue) => res.render('venues/edit_venue.ejs', venue))
            .catch((err) => res.json(err))
    })
    router.put('/:id', (req, res) => {
        const id = req.params.id
        Venues.findByIdAndUpdate(id, req.body)
            .then(() => res.redirect('/events'))
            .catch((err) => res.json(err))
    })

// --- DELETE ---
    router.delete('/:id', (req, res) => {
        const id = req.params.id
        Venues.findByIdAndDelete(id)
            .then(() => res.redirect('/venues'))
            .catch((err) => res.json(err))
    })


    module.exports = router;