const mongoose = require('../connection');

const EventSchema = new mongoose.Schema(
    {
        title: {type: String, unique: true},
        featured_bands: [String],
        date: Date,
        location: {
            country: String,
            state: String,
            city: String,
        },
 // Eventually Replace this is Venue Schema 
        venue: String,
        genres: [String],
        description: String,
    }
)

const Events = mongoose.model('Events', EventSchema);

module.exports = Events;