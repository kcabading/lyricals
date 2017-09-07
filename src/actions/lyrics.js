import {getLyrics,saveLyrics} from '../lib/lyricsServices'
import parseLyrics from '../helpers/parseLyrics'
import Constants from '../constants/lyrics'

// async function to get lyrics
export const fetchLyrics = (url) => {    
    return (dispatch) => {
        dispatch({type: Constants.FETCH_LYRICS})        
        getLyrics(url)
            .then(results => dispatch(loadLyrics(parseLyrics(results))))            
    }
}
// load lyrics action
export const loadLyrics = (lyrics) => ({type: Constants.LYRICS_FETCHED, payload: lyrics})

// async function to save lyrics
export const saveFetchedLyrics = (data, callback) => {     
    return (dispatch) => {                
        dispatch({type: Constants.SAVING_LYRICS})
        saveLyrics(data)
            .then(results => {
                if (callback) {
                    callback(results)
                }
                dispatch({type: Constants.LYRICS_SAVED})
            })
    }
}

export const loadSavedLyrics = (lyrics) => ({type: Constants.SAVED_LYRICS_FETCHED, payload: lyrics})