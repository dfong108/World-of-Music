const express = require('express');
const { get } = require('express/lib/response');
const router = express.Router();
const Bands = require('../db/models/bandModel');


// --- CREATE ---
    router.get('/new', (req, res) => {
        res.render('bands/new_band.ejs')
    })

    router.post('/', (req, res) => {

        function getMembers () {

            class Member {
                constructor(name, roles) {
                    this.name = name;
                    this.roles = roles;
                }
            }
            let membersArray = [];
            let rolesArray = [];
            let finalArray = [];

            req.body.memberName.forEach((member) => {
                membersArray.push(member)
            })
            req.body.memberRole.forEach((role) => {
                rolesArray.push(role)
            })

            for (let i = 0; i < membersArray.length; i++) {
                    let member = new Member(membersArray[i], rolesArray[i])
                    finalArray.push(member)
            }

            req.body.members = finalArray
            return req.body.members
            // req.body.members = [ { name : "req.body.memberName" ,  roles: [ req.body.memberRole ] } ] 
        }
        getMembers();
        
        console.log(req.body)
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

    router.put('/:id', (req, res) => {
        const id = req.params.id
        console.log(req.body)

        // ----------- Members -----------

        function getMembers () {

                class Member {
                    constructor(name, roles) {
                        this.name = name;
                        this.roles = roles;
                    }
                }
                let membersArray = [];
                let rolesArray = [];
                let finalArray = [];

                req.body.memberName.forEach((member) => {
                    membersArray.push(member)
                })
                req.body.memberRole.forEach((role) => {
                    rolesArray.push(role)
                })

                for (let i = 0; i < membersArray.length; i++) {
                        let member = new Member(membersArray[i], rolesArray[i])
                        finalArray.push(member)
                }

                req.body.members = finalArray
                return req.body.members
                // req.body.members = [ { name : "req.body.memberName" ,  roles: [ req.body.memberRole ] } ] 
            }
        getMembers();
                

        Bands.findByIdAndUpdate( id, req.body)
            // .then( console.log(req.body))
            .then(() => res.redirect(`/bands`))
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