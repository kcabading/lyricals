import {getLyrics,saveLyrics} from '../lib/lyricsServices'
import parseLyrics from '../helpers/parseLyrics'

const initState = {
    initLoadingLyrics: false,
    lyricsLoaded: false,        
    title: "",
    artist: "",
    albums: [],
    lyrics: ""
}

const FETCH_LYRICS = "FETCH_LYRICS"
const LYRICS_FETCHED = "LYRICS_FETCHED"
// async function to get lyrics
export const fetchLyrics = (url) => {    
    console.log('GETTING LYRICS');
    return (dispatch) => {
        dispatch({type: FETCH_LYRICS})
        getLyrics(url)
            .then(results => dispatch(loadLyrics(parseLyrics(results))))
            // .then(results => console.log("RESULTS", results));
    }
}
// load lyrics action
export const loadLyrics = (lyrics) => ({type: LYRICS_FETCHED, payload: lyrics})


// async function to save lyrics
export const saveFetchedLyrics = (data) => {    
    console.log('SAVING LYRICS');
    console.log(data)
    return (dispatch) => {        
        saveLyrics(data)
            .then(results => console.log(results))
            // .then(results => console.log("RESULTS", results));
    }
}


export default (state = initState, action) => {    
    switch (action.type) {        
        case FETCH_LYRICS:
            return {
                ...state, 
                initLoadingLyrics: !state.initLoadingLyrics,
                lyricsLoaded: false,
            }
        case LYRICS_FETCHED:            
            return {
                ...state,                 
                initLoadingLyrics: false,
                lyricsLoaded: true,
                lyrics: action.payload.lyrics,
                albums: action.payload.albums,
                title: action.payload.title,
                artist: action.payload.artist
            }
        default:
            return state;            
    }
};