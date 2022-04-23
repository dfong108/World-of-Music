const mongoose = require('../connection');

// IMPORT OTHER SCHEMAS


const LocationSchema = new mongoose.Schema(
    {
        country: String,
        state: String,
        city: String,
    },
)

const VenueSchema = new mongoose.Schema(
    {
        name: String,
        location: LocationSchema,
        website: String,
        upcoming_events: {
            title: String,
            date: Date,
        },
        images:{
            main: String,
            alt: [String]
        }
    }
)

const Venues = mongoose.model('Venues', VenueSchema);

module.exports = Venues;