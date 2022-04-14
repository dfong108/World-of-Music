const mongoose = require('mongoose');

const mongoURI =
    process.env.NODE_ENV == 'production'
    ? process.env.DB_URL
    :'mongodb+srv://davidson:davidson@cluster0.kzupr.mongodb.net/Project_Two_music_calendar?retryWrites=true&w=majority'

mongoose.connect(mongoURI)
    .then((conn) => {
        console.log(`*** Conncted to MongoDB on ${conn.connections[0].name} ***`)
    })
    .catch(err => {
        console.error(err)
    })

module.exports = mongoose;