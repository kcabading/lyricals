import CONSTANTS from '../constants/lyrics'

const initState = {    
    saved: false,
    name: "",
    artist: "",
    albums: [],
    lyrics: ""
}

export default (state = initState, action) => {    
    switch (action.type) {        
        case CONSTANTS.FETCH_LYRICS:
            return {
                ...state,                 
                saved: false,
                lyrics: "",
                albums: [],
                name: "",
                artist: "",
                lyricsLoaded: false,
            }
        case CONSTANTS.LYRICS_FETCHED:
            return {
                ...state,                
                lyricsLoaded: true,
                saved: false,
                lyrics: action.payload.lyrics,
                albums: action.payload.albums,
                name: action.payload.name,
                artist: action.payload.artist                
            }
        case CONSTANTS.SAVED_LYRICS_FETCHED:
            return {
                ...state,                
                lyricsLoaded: true,
                saved: true,
                lyrics: action.payload.lyrics,
                albums: action.payload.albums,
                name: action.payload.name,
                artist: action.payload.artist                
            }
        default:
            return state;            
    }
};