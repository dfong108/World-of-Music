const mongoose = require('../connection');
// const VenuesSchema = require('./venueModel').schema;
// const EventSchema = require('./eventModel').schema

const MembersSchema = new mongoose.Schema(
    {
        name: String,
        roles: [ String ]
    }
)
const OriginSchema = new mongoose.Schema(
    {
        country: String,
        state: String,
        city: String,
        slogan: String,
    }
)
const BandSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            unique: true
        },
        origin: OriginSchema,
        members: [ MembersSchema ],
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