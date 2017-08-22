import {getLyrics} from '../lib/lyricsServices'
import parseLyrics from '../helpers/parseLyrics'

const initState = {
    initLoadingLyrics: false,
    lyricsLoaded: false,
    title: "",
    lyrics: ""
}

const FETCH_LYRICS = "FETCH_LYRICS"
const LYRICS_FETCHED = "LYRICS_FETCHED"
// async function to get lyrics
export const fetchLyrics = (url) => {
    console.log('fetching lyrics');
    return (dispatch) => {
        dispatch({type: FETCH_LYRICS})
        getLyrics(url)
            // .then(results => dispatch(loadLyrics(parseLyrics(results))))
            .then(results => dispatch(loadLyrics(parseLyrics(results))));
    }
}
// load lyrics action
export const loadLyrics = (lyrics) => ({type: LYRICS_FETCHED, payload: lyrics})

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
                title: action.payload.title
            }
        default:
            return state;            
    }
};