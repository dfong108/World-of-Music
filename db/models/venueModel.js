const mongoose = require('../connection');

const VenueSchema = new mongoose.Schema(
    {
        name: {type: String, unique: true},
        location: {
            country: String,
            state: String,
            city: String,
        },
        website: String,
        upcoming_events: {
            title: String,
            date: Date,
        }
    }
)

const Venues = mongoose.model('Venues', VenueSchema);

module.exports = Venues;