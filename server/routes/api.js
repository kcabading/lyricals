const express = require('express')
const router = express.Router()
const request = require('request-promise')


const AZLYRICS = "https://www.azlyrics.com"
const AZSEARCH = "https://search.azlyrics.com/search.php"

// GET saved data
router.get('/saved', function(req, res, next) {
    // return json data
    res.json({
        "name": "Kristian Cabading",
        "settings": {
            "option1": true,
            "option2": true
        },
        "data": {
            "albums": [
            {"id": 1, "name": "Album1"},
            {"id": 2, "name": "Album2"}
            ],
            "artists": [
            { "id": 3, "name": "Eminem" }
            ],
            "songs": [
            { 
                "id": 4, 
                "title": "Love the way you lie", 
                "artist": "Eminem", "album": "123",
                "lyrics" : "123"
            },        
            { 
                "id": 5, 
                "title": "Rap God", 
                "artist": "Eminem", 
                "album": "123",
                "lyrics" : "456"
            }
            ]
        }
    })
});

/* GET search azlyrics. */
router.get('/search', function(req, res, next) {
	// initalise options
    const options = {  
        method: 'GET',
        uri: AZSEARCH,
        qs: {
            q: req.param('q')
        }
    }    
    // start request
    request(options)  
        .then( function (response) {            
            res.send(response)
            // Request was successful, use the response object at will
        })
        .catch(function (err) {
            // Something bad happened, handle the error
        })
});

/* GET lyrics. */
router.get('/lyrics', function(req, res, next) {    
	// initalise options
    const options = {  
        method: 'GET',
        uri: AZLYRICS + req.param('p')        
    }    
    // start request
    request(options)  
        .then( function (response) {
            res.send(response)
            // Request was successful, use the response object at will
        })
        .catch(function (err) {
            // Something bad happened, handle the error
        })
});

module.exports = router;