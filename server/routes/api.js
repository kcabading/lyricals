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
const SavedData = require('../../src/helpers/dataFind')
const EscapeToJson = require('../../src/helpers/escapeStringToJson')

// GET saved data
router.get('/saved', function(req, res, next) {    
    // return json data
    res.json(SAVEDDATA)
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
    // get request body
    const objReqBody = req.body;
    let objArtist, arAlbums, objSong;
    // if artist not found
    if ( (objArtist = SavedData.checkArtist(objReqBody.artist) ) === undefined ) {
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
    // if ( (arAlbums = SavedData.checkAlbum(objReqBody.albums) ) === undefined ) {
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
    if ( (objSong = SavedData.checkSong(objReqBody.name) ) === undefined ) {
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

    // // console.log("artist", req.body.artist)
    
    // // // do we have lyrics?
    // // if (objReqBody.lyrics) {
    // //     // check if artist exist               
    // // }
    
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