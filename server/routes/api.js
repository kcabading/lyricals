const express = require('express')
const router = express.Router()
const request = require('request-promise')
const AZLYRICS = "https://www.azlyrics.com"
const AZSEARCH = "https://search.azlyrics.com/search.php"
const DATA = require('../../db.json');
const path = require('path');
const fs = require('fs');

// GET saved data
router.get('/saved', function(req, res, next) {    
    // return json data
    res.json(DATA)
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


router.post('/lyrics', function(req, res, next){
    DATA.name = 'Irene Dela Cruz';
    console.log(DATA);
    fs.writeFile('db.json', JSON.stringify(DATA), 'utf8', function(err, data){
        console.log('DATA SAVED');
    });

    // console.log(typeof req.body);
    // console.log('SAVING LYRICS');    
    // console.log("title", req.body.title)
    // console.log("artist", req.body.artist)
    // console.log("albums", req.body.albums)
})

module.exports = router;