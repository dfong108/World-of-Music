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
                

        // ----------- Images -----------

        // let imgArray = [];
        console.log(req.body.mainImage)
        // // req.body.mainImage.forEach((img) => {
        // //     imgArray.push(img)
        // // })

        // console.log(imgArray)

        Bands.findByIdAndUpdate( id, req.body)
            // .then( console.log(req.body))
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