import {getSavedData, asyncSetAsFavorite, asyncDeleteLyrics} from '../lib/lyricsServices'
import CONSTANTS from '../constants/saved'
// async function to get lyrics
export const fetchSavedData = (url) => {
    console.log('fetching saved data');
    return (dispatch) => {
        dispatch({type: CONSTANTS.FETCH_SAVED_DATA})
        getSavedData(url)
            // .then(results => dispatch(loadLyrics(parseLyrics(results))))
            .then(response => dispatch(loadData(response)));
    }
}
// load lyrics action
export const loadData = (saved) => ({type: CONSTANTS.DATA_FETCHED, payload: saved.data})

// async function to set favorite
export const setAsFavorite = (id) => {
    console.log('saving favorite');
    return (dispatch) => {
        dispatch({type: CONSTANTS.SET_FAVORITE})
        asyncSetAsFavorite(id)            
            .then(response => dispatch({type: CONSTANTS.SET_FAVORITE_RESPONSE, payload: response.data}))
    }
}

// async function to set favorite
export const deleteLyrics = (id) => {
    console.log('saving favorite');
    return (dispatch) => {
        dispatch({type: CONSTANTS.DELETE_LYRICS})
        asyncDeleteLyrics(id)            
            .then(response => dispatch({type: CONSTANTS.DELETE_LYRICS_RESPONSE, payload: response.data}))
    }
}