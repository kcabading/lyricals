import {getLyrics,saveLyrics} from '../lib/lyricsServices'
import parseLyrics from '../helpers/parseLyrics'
import CONSTANTS from '../constants/lyrics'

// async function to get lyrics
export const fetchLyrics = (url) => {    
    return (dispatch) => {
        dispatch({type: CONSTANTS.FETCH_LYRICS})
        getLyrics(url)
            .then(results => dispatch(loadLyrics(parseLyrics(results))))            
    }
}
// load lyrics action
export const loadLyrics = (lyrics) => ({type: CONSTANTS.LYRICS_FETCHED, payload: lyrics})

// async function to save lyrics
export const saveFetchedLyrics = (data, callback) => {     
    return (dispatch) => {        
        saveLyrics(data)
            .then(results => callback(results))            
    }
}

export const loadSavedLyrics = (lyrics) => ({type: CONSTANTS.SAVED_LYRICS_FETCHED, payload: lyrics})