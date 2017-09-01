import {getLyrics,saveLyrics} from '../lib/lyricsServices'
import parseLyrics from '../helpers/parseLyrics'

const initState = {
    initLoadingLyrics: false,
    lyricsLoaded: false,
    saved: false,
    name: "",
    artist: "",
    albums: [],
    lyrics: ""
}

const FETCH_LYRICS = "FETCH_LYRICS"
const LYRICS_FETCHED = "LYRICS_FETCHED"
const SAVED_LYRICS_FETCHED = "SAVED_LYRICS_FETCHED"
// async function to get lyrics
export const fetchLyrics = (url) => {    
    return (dispatch) => {
        dispatch({type: FETCH_LYRICS})
        getLyrics(url)
            .then(results => dispatch(loadLyrics(parseLyrics(results))))            
    }
}
// load lyrics action
export const loadLyrics = (lyrics) => ({type: LYRICS_FETCHED, payload: lyrics})

// async function to save lyrics
export const saveFetchedLyrics = (data, callback) => {     
    return (dispatch) => {        
        saveLyrics(data)
            .then(results => callback(results))            
    }
}

export const loadSavedLyrics = (lyrics) => ({type: SAVED_LYRICS_FETCHED, payload: lyrics})

export default (state = initState, action) => {    
    switch (action.type) {        
        case FETCH_LYRICS:
            return {
                ...state, 
                initLoadingLyrics: !state.initLoadingLyrics,
                saved: false,
                lyricsLoaded: false,
            }
        case LYRICS_FETCHED:
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
        case SAVED_LYRICS_FETCHED:
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