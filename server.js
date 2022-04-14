const express = require('express');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('method-override');
const bandRouter = require('./controllers/bandRouter');
const eventRouter = require('./controllers/eventRouter');
const venueRouter = require('./controllers/venueRouter');


app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(cors());
app.use(methodOverride('_method'))
app.use('/bands', bandRouter);
app.use('/events', eventRouter);
app.use('/venues', venueRouter);


app.get('/', (req, res) => {
    res.send('home page')
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`--- Music Schedule App running on ${port} ---`)
})