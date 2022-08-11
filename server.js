const express = require('express');
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const app = express();
const methodOverride = require('method-override');
const cors = require('cors');
const expressLayouts = require('express-ejs-layouts')
require('method-override');




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


// app.get ('https://calendar.google.com/calendar/ical/mopkombqjd0if4hrlhbs03dijo%40group.calendar.google.com/public/basic.ics', (req, res) => {
//         console.log (res.json())
// })




const port = process.env.PORT || 4500;

app.listen(port, () => {
    console.log(`--- World of Music App running on ${port} ---`)
})