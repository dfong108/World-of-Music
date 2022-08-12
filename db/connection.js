const mongoose = require('mongoose');

const mongoURI = 
    process.env.NODE_ENV == 'production'
    //  && process.env.DB_URL
    ? process.env.DB_URL
    : 'mongodb+srv://david:david@cluster0.xyeuz.mongodb.net/World-of-Music-App?retryWrites=true&w=majority'
    // : 'mongodb+srv://davidson:davidson@cluster0.xyeuz.mongodb.net/World-of-Music-App?retryWrites=true&w=majority'
    // : DEV_DB_URL


mongoose.connect(mongoURI)
    .then((conn) => {
        console.log(`*** Connected to MongoDB on ${conn.connections[0].name} ***`)
    })
    .catch(err => {
        console.error(err)
    })

module.exports = mongoose;