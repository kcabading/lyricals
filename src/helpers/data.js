
const SAVEDDATA = require('../../db.json');

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
    setAsFavorite: function(id){
        // find artist
        return SAVEDDATA.data.songs.findIndex(function (song) {
            return song.id === id;
        });
    }
};