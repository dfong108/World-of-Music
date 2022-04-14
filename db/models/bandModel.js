const mongoose = require('../connection');
// const VenuesSchema = require('./venueModel').schema;
// const EventSchema = require('./eventModel').schema

const BandSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            unique: true
        },
        origin: {
            country: String,
            state: String,
            city: String,
            slogan: String,
            year: Number,
        },
        members: [
            {
                name: String,
                roles: [String]
            }
        ],
        biography: String,
        songs: [String],
        touring: Boolean,
        genres: [String],
        tags: [String],
        images:{
            main: String,
            alt: [String]
        }
        // venues_played: [VenuesSchema],
        // scheduled_events: [EventSchema],
    }
)

const Bands = mongoose.model('Bands', BandSchema);

module.exports = Bands;