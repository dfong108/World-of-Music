const mongoose = require('mongoose');

const mongoURI =
    process.env.NODE_ENV == 'production' && process.env.DB_URL



mongoose.connect(mongoURI)
    .then((conn) => {
        console.log(`*** Connected to MongoDB on ${conn.connections[0].name} ***`)
    })
    .catch(err => {
        console.error(err)
    })

module.exports = mongoose;