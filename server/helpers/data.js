const fs = require('fs');

const SAVEDDATA = require('../../db.json');
const SAVEDDATA_PATH = "db.json"
const EscapeToJson = require('../../src/helpers/escapeStringToJson')


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
        // if not undefined
        if (songIndex !== undefined && SAVEDDATA.data.songs[songIndex]) {
            // set favorite
            SAVEDDATA.data.songs[songIndex].favorite = true;
            // escase and parse
            let strNewData = EscapeToJson(SAVEDDATA);
            // //Do your processing, MD5, send a satellite to the moon, etc.
            fs.writeFile (SAVEDDATA_PATH, strNewData, function(err, res) {
                if (err) throw err;                
                // invoke callback
                cb();
            });
        }
    }
};