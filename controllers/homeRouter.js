const express = require('express');
const router = express.Router();

const Bands = require('../db/models/bandModel')
const Events = require('../db/models/eventModel')
const Venues = require('../db/models/venueModel')


// --- READ ---
router.get('/', (req, res) => {
    // res.send('hello world')
    Bands.find({})
        .then((bands) => {
            Events.find({})
            .then((events) => {
                Venues.find({})
                    .then((venues) => res.render('home.ejs', {allVenues: venues}))
                    .catch((err) => res.json(err))

            })
            .catch((err) => res.json(err))
        }) 
})


// router.get('/', (req, res) => {

//     Bands.find({})
//         .then((bands) => res.render('home.ejs', {allBands: bands}))
//         .catch((err) => res.json(err))
//     Events.find({})
//         .then((events) => res.render('home', {allEvents: events}))
//         .catch((err) => res.json(err))
//     Venues.find({})
//         .then((venues) => res.render('home.ejs', {allVenues: venues}))
//         .catch((err) => res.json(err))
// })


module.exports = router