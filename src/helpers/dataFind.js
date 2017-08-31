
const SAVEDDATA = require('../../db.json');

module.exports = {
    checkArtist: function(artistName){
        console.log('CHECKING ARTIST');
        // find artist
        return SAVEDDATA.data.artists.find(function (artist) {
            return artist.name == artistName.trim();
        });

    },

    checkAlbum: function(albumName){
        console.log('CHECKING ALBUM');
        // find album
        return SAVEDDATA.data.albums.find(function (album) {
            return album.name == albumName.trim();
        });

    },

    checkSong: function(songName){
        // find song
        return SAVEDDATA.data.songs.find(function (song) {
            return song.name == songName.trim();
        });
    }
};