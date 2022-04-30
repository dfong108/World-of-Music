require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts')
require('method-override');

// const mongoose = require('mongoose');


const bandRouter = require('./controllers/bandRouter');
const eventRouter = require('./controllers/eventRouter');
const venueRouter = require('./controllers/venueRouter');

// ----- Middleware -----
        app.set('view engine', 'ejs');
        app.use(expressLayouts);
        app.use(express.json());
        app.use(express.urlencoded({extended: true}));
        app.use(express.static('public'));
        app.use(cors());
        app.use(methodOverride('_method'))
// ----- Routes -----
        app.use('/bands', bandRouter);
        app.use('/events', eventRouter);
        app.use('/venues', venueRouter);



const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`--- World of Music App running on ${port} ---`)
})