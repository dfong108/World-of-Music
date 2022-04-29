const express = require('express');
const router = express.Router();
const Bands = require('../db/models/bandModel');


// --- CREATE ---
    router.get('/new', (req, res) => {
        res.render('bands/new_band.ejs')
    })
    router.post('/', (req, res) => {
        Bands.create(req.body)
            .then(() => res.redirect('/bands'))
            .catch((err) => res.json(err))
    })

// --- READ ---
    router.get('/', (req, res) => {
        Bands.find({})
            .then((bands) => res.render('bands/band_index', {allBands: bands}))
            .catch((err) => res.json(err))
    })
    router.get('/:id', (req, res) => {
        const id = req.params.id
        Bands.findById(id)
            .then((band) => {
                console.log(band)
                res.render('bands/show_band.ejs', band)
            })
    
            .catch((err) => res.json(err))

    })

// --- UPDATE ---
    router.get('/:id/edit', (req, res) => {
        const id = req.params.id
        Bands.findById(id)
            .then((band) => {
                console.log(band)
                res.render('bands/edit_band.ejs', band)
            })
            .catch((err) => res.json(err))
    })

    // router.put('/:id', async (req, res, next)=>{
    //     try {
    //         const updatedBand = await Bands.findByIdAndUpdate(req.params.id, req.body);
    //         console.log(updatedBand);
    //         return res.redirect(`/bands`)
    //     } catch (error) {
    //         console.log(error);
    //         req.error = error;
    //         return next();
    //     }
    // })


    router.put('/:id', (req, res) => {
        const id = req.params.id
        console.log(req.body)

        if (typeof req.body.members === 'string') {
            // req.body.members = [ { name: req.body.member, roles: [] } ]
            req.body.members = [ { name: req.body.member, roles: [] } ]
        }

        console.log(req.body)
        Bands.findByIdAndUpdate( id, req.body)
            .then( console.log())
            .then(() => res.redirect('/bands'))
            .catch((err) => console.log(err))
    })
// --- DELETE ---
    router.delete('/:id', (req, res) => {
        const id = req.params.id
        Bands.findByIdAndDelete(id)
            .then(() => res.redirect('/bands'))
            .catch((err) => res.json(err))
    })


module.exports = router;