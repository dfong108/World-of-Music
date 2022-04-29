const express = require('express');
const router = express.Router();
const Events = require('../db/models/eventModel');


// --- CREATE ---
    router.get('/new', (req, res) => {
        res.render('events/new_event')
    })
    router.post('/', (req, res) => {
        Events.create(req.body)
            .then(() => res.redirect('/events'))
            .catch((err) => res.json(err))
    })

// --- READ ---
    router.get('/', (req, res) => {
        Events.find({})
            .then((events) => res.render('events/event_index', {allEvents: events}))
            .catch((err) => res.json(err))
    })
    router.get('/:id', (req, res) => {
        const id = req.params.id
        Events.findById(id)
            .then((event) => res.render('events/show_event.ejs', event))
            .catch((err) => res.json(err))
    })

// --- UPDATE ---
    router.get('/:id/edit', (req, res) => {
        const id = req.params.id
        Events.findById(id)
            .then((event) => res.render('events/edit_events.ejs', event))
            .catch((err) => res.json(err))
    })
    router.put('/:id', (req, res) => {
        const id = req.params.id
        Events.findByIdAndUpdate(id, req.body)
            .then((event) => res.redirect('/events'))
            .catch((err) => res.json(err))
    })

// --- DELETE ---
    router.delete('/:id', (req, res) => {
        const id = req.params.id
        Events.findByIdAndDelete(id)
            .then(() => res.redirect('/events'))
            .catch((err) => res.json(err))
    })


module.exports = router;