import CONSTANTS from '../constants/lyrics'

const initState = {    
    saved: false,
    name: "",
    artist: "",
    albums: [],
    lyrics: "",
    loading: false,
    success: false,
    message: ""
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
                loading: true,
                success: false,
                message: ""
            }
        case CONSTANTS.LYRICS_FETCHED:
            return {
                ...state,                
                loading: false,
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
                artist: action.payload.artist,
                success: false,
                message: ""
            }
        case CONSTANTS.SAVING_LYRICS:
            return {
                ...state,                
                loading: true
            }        
        case CONSTANTS.LYRICS_SAVED:
            return {
                ...state,                
                loading: false,
                success: true,
                saved: true,
                message: "Lyrics saved locally"
            }        
        default:
            return state;            
    }
};