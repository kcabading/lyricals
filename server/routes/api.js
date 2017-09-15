const express = require('express')
const router = express.Router()
const request = require('request-promise')
const AZLYRICS = "https://www.azlyrics.com"
const AZSEARCH = "https://search.azlyrics.com/search.php"
const SAVEDDATA = require('../../db.json')
const SAVEDDATA_PATH = "db.json"
const path = require('path')
const fs = require('fs')
const shortid = require('shortid')
const SavedData = require('../../server/helpers/data')
const EscapeToJson = require('../../src/helpers/escapeStringToJson')

// GET saved data
router.get('/saved', function(req, res) {    
    // return json data
    res.json(SAVEDDATA)
});

/* GET search azlyrics. */
router.get('/search', function(req, res) {
	// initalise options
    const options = {  
        method: 'GET',
        uri: AZSEARCH,
        qs: {
            q: req.query.q
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
            console.log("ERROR SEARCHING", err)
        })
});

/* GET MORE SEARCH RESULTS */
router.get('/moreresults', function(req, res) {
    console.log(req.query)
	// initalise options
    const options = {  
        method: 'GET',
        uri: AZSEARCH,
        qs: req.query
    }
    console.log('MORE RESULTS OPTIONS')
    console.log(options)
    // start request
    request(options)  
        .then( function (response) {  
            
            console.log("MORE RESULTS RESPONSE")
            res.send(response)
            // Request was successful, use the response object at will
        })
        .catch(function (err) {
            // Something bad happened, handle the error
            console.log(err);
        })
});


/* GET lyrics. */
router.get('/lyrics', function(req, res) {    
	// initalise options
    const options = {  
        method: 'GET',
        uri: AZLYRICS + req.query.p      
    }
    console.log('GETTING LYRICS')
    console.log(options)
    // start request
    request(options)  
        .then( function (response) {
            res.send(response)
            // Request was successful, use the response object at will
        })
        .catch(function (err) {
            // Something bad happened, handle the error
            console.log('ERROR GETTING LYRICS')
            console.log(err)
        })
});

/* POST set favorite lyrics. */
router.post('/lyrics/favorite/:id', function(req, res) {
	// initalise options    
    console.log('SETTING FAVORITE')
    console.log(req.params)    
    // get song index
    SavedData.setAsFavorite(req.params.id, function() {        
        // send response
        res.json(SAVEDDATA)
    });
});


router.post('/lyrics', function(req, res){   
    // get request body
    const objReqBody = req.body;
    let objArtist, arAlbums, objSong;
    // if artist not found
    if ( (objArtist = SavedData.checkIfExist('artist', objReqBody.artist) ) === undefined ) {
        console.log('artist not found')
        console.log(objReqBody);
        // add new artist
        SAVEDDATA.data.artists.push({
            "id": shortid.generate(),
            "name": objReqBody.artist.trim(),
            "albums": objReqBody.albums
        })
    }
    // if album not found
    // if ( (arAlbums = SavedData.checkIfExist(objReqBody.albums) ) === undefined ) {
    //     console.log('album not found')
    //     // loop through albums
    //     arAlbums.forEach(function(album) {
    //         // add new album
    //         SAVEDDATA.data.albums.push({
    //             "id": shortid.generate(),
    //             "name": album.name,
    //             "artist": objReqBody.artist.trim()
    //         })
    //     }, this);        
    // }

    // if song not found
    if ( (objSong = SavedData.checkIfExist('song', objReqBody.name) ) === undefined ) {
        console.log('song not found')
        // add new song 
        SAVEDDATA.data.songs.push({
            "id": shortid.generate(),
            "name": objReqBody.name.trim(),
            "artist": objReqBody.artist.trim(),
            "albums": (objReqBody.albums) ? objReqBody.albums : [],
            "lyrics": objReqBody.lyrics
        })
    } 
    
    let strNewData = EscapeToJson(SAVEDDATA);  
    // //Do your processing, MD5, send a satellite to the moon, etc.
    fs.writeFile (SAVEDDATA_PATH, strNewData, function(err) {
        if (err) throw err;       

        res.json(SAVEDDATA)
    });
    

    // fs.writeFile('db.json', JSON.stringify(DATA), 'utf8', function(err, data){
    //     console.log('DATA SAVED');
    // });

    // console.log(typeof req.body);
    // console.log('SAVING LYRICS');    
    // console.log("title", req.body.title)
    // console.log("artist", req.body.artist)
    // console.log("albums", req.body.albums)
    // console.log("albums", req.body.lyrics)
})

module.exports = router;