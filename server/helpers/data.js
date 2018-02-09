const fs = require('fs');

const SAVEDDATA = require('../../db.json');
const SAVEDDATA_PATH = "db.json"
const EscapeToJson = require('../../src/helpers/escapeStringToJson')

function updateData(strNewData, cb) {
    //Do your processing, MD5, send a satellite to the moon, etc.
    fs.writeFile (SAVEDDATA_PATH, strNewData, 'utf8', function(err) {
        // if error            
        if (err) cb(err, null)
        // invoke callback
        cb(null, true);
    });
}

module.exports = {
    checkIfExist: function(type, name){
        // determine type        
        switch(type) {
            case 'artist':
                // find artist
                return SAVEDDATA.data.artists.find(function (record) {
                    return record.name === name.trim();
                });
                break;
            case 'album':
                // find album
                return SAVEDDATA.data.albums.find(function (record) {
                    return record.name === name.trim();
                });
                break;
            case 'song':
                // find song
                return SAVEDDATA.data.songs.find(function (record) {
                    return record.name === name.trim();
                });
                break;
            default:
        }        
    },
    setAsFavorite: function(id, cb){
        // find artist
        let songIndex = SAVEDDATA.data.songs.findIndex(function (song) {
            return song.id === id;
        });
        // if undefined, call error
        if (songIndex===undefined) cb('no song found', null)
        // if exist
        if (SAVEDDATA.data.songs[songIndex]) {
            // set favorite
            SAVEDDATA.data.songs[songIndex].favorite = !SAVEDDATA.data.songs[songIndex].favorite;
            // parse and escape then update data
            updateData(EscapeToJson(SAVEDDATA),cb)
        }               
    },
    deleteSong: function(id, cb){
        // find artist
        let songIndex = SAVEDDATA.data.songs.findIndex(function (song) {
            return song.id === id;
        });
        // if not undefined
        if (songIndex !== undefined && SAVEDDATA.data.songs[songIndex]) {
            // set favorite
            SAVEDDATA.data.songs.splice( songIndex, 1 );            
            // update data
            updateData(EscapeToJson(SAVEDDATA), cb)
        }
    }    
};