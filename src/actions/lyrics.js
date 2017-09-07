import {getLyrics,saveLyrics} from '../lib/lyricsServices'
import parseLyrics from '../helpers/parseLyrics'
import Constants from '../constants/lyrics'
import GlobalConstants from '../constants/global'

// async function to get lyrics
export const fetchLyrics = (url) => {    
    return (dispatch) => {
        dispatch({type: Constants.FETCH_LYRICS})
        dispatch({type: GlobalConstants.INIT_LOADING})
        getLyrics(url)
            .then(results => dispatch(loadLyrics(parseLyrics(results))))
            .then(results => dispatch({type: GlobalConstants.END_LOADING}))
    }
}
// load lyrics action
export const loadLyrics = (lyrics) => ({type: Constants.LYRICS_FETCHED, payload: lyrics})

// async function to save lyrics
export const saveFetchedLyrics = (data, callback) => {     
    return (dispatch) => {                
        saveLyrics(data)            
            .then(results => callback(results))
            .then(results => dispatch({type: GlobalConstants.END_LOADING}))
    }
}

export const loadSavedLyrics = (lyrics) => ({type: Constants.SAVED_LYRICS_FETCHED, payload: lyrics})