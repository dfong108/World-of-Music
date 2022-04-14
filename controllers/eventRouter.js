const express = require('express');
const router = express.Router();
const Events = require('../db/models/eventModel');

function displayIndex(req, res){
    Events.find({}, {name: 1})
        .then((events) => res.json(events))
        .catch((err) => res.json(err))
}
// --- CREATE ---

router.post('/', (req, res) => {
    Events.create(req.body)
        .then(displayIndex(req, res))
        .catch((err) => res.json(err))
})

// --- READ ---
router.get('/', (req, res) => {
    displayIndex(req, res)
})

// --- UPDATE ---
router.put('/:id', (req, res) => {
    const id = req.params.id
    Events.findByIdAndUpdate(id, req.body)
        .then(() => displayIndex(req, res))
        .catch((err) => res.json(err))
})

// --- DELETE ---
router.delete('/:id', (req, res) => {
    const id = req.params.id
    Events.findByIdAndDelete(id)
        .then(() => displayIndex(req, res))
        .catch((err) => res.json(err))
})




module.exports = router;