# World-of-Music
# World-of-Music

# Heroku Link:

https://world-of-music-app.herokuapp.com/bands

# USER STORIES
    Summary
    - Problem:  When patrons of a venue interact with a band, one of the most common questions is “When/Where are you playing next?”
        - Though it is possible to embed individual public Google calendars onto a page, the visual is sub-par. Also, not every band uses Google Calendars. I’m starting off there because it’s the most common calendar; and IT’S GOOGLE!!!! This project will serve as a template to plug in different calendar APIs like Apple, etc.
        - Organization will be absolutely critical, both in file structure as well as usage of variables. This should be Turn Key. 
        - Eventually, this app will get deployed to Shopify. 
    - Solution: Use Google Calendar API to display schedules of local bands. The bands are already using some sort of calendar to track their gigs (most of them use Google Calendar). Within their calendar, they track all the necessary information: Who? When? Where? This solution benefits at least three separate groups of people.
    - I want want the API to work PARALLEL TO THE APP! - kind of like the “.map()” array method. I think this makes the app turn key and I can plug in ANY calendar API.
    User Stories & Functionality
    1. Bands:
        -  Per Google’s Authorization, Bands will provide link to calendar as well as authorization to display their calendar. The goal is to edit the visual aspect of the calendar but not the actual content. This is important to note, as there are different levels of authorization through Google API. 
    2. Patrons (end user):
        - Patrons will be able to see events based on different parameters: 
            * Event
            * Musician
            * Venue
        - When displaying all dates, they’ll be displayed in chronological order but can be sorted by the aforementioned parameters.
        - (Stretch) Patrons will be able to add the events to their own calendars
    3. Venues: 
        - The venues may never interact\ directly with this app. But their info is critical. When the band makes a calendar event, once they list a valid location, the venue information becomes available through the calendar event. This means the venue name, location (Google Maps), and oogle profile info (picture, descriptions, ratings) become available. 


# TECHNOLOGIES
    1. JavaScript
    2. CSS
    3. HTML
    4. MongoDB / Mongoose / Compass / Atlas
    5. Postman
    6. Heroku
    7. GitHub
    8. Google



# NOTES TO SELF
    1. Accessing nested arrays worked in the PUT route (update) but not in the POST route (create).
    2. Finish adding event listener to forms for client-side validation
    3. Add search bar and filters to each model
    4. Add Goole Maps