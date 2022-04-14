const mongoose = require('../connection');
const { prependOnceListener } = require('../models/bandModel');

// Import Models
const Bands = require('../models/bandModel')
const Events = require('../models/eventModel')
const Venues = require('../models/venueModel')

// Import Seeds
const bandSeeds = require('./bandSeeds.json');
const eventSeeds = require('./eventSeeds.json');
const venueSeeds = require('./venueSeeds.json');

// Load the Mongoose Database

    Bands.deleteMany({})
        .then(() => Bands.insertMany(bandSeeds))
        .then(console.log)
        .catch(console.error)
        // .finally(() => process.exit())

    Events.deleteMany({})
        .then(() => Events.insertMany(eventSeeds))
        .then(console.log)
        .catch(console.error)
        // .finally(() => process.exit())

    Venues.deleteMany({})
        .then(() => Venues.insertMany(venueSeeds))
        .then(console.log)
        .catch(console.error)
        .finally(() => process.exit())