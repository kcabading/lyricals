import CONSTANTS from '../constants/lyrics'

const initState = {
    initLoadingLyrics: false,
    lyricsLoaded: false,
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
                initLoadingLyrics: !state.initLoadingLyrics,
                saved: false,
                lyricsLoaded: false,
            }
        case CONSTANTS.LYRICS_FETCHED:
            return {
                ...state,                 
                initLoadingLyrics: false,
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
                initLoadingLyrics: false,
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