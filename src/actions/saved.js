import {getSavedData, asyncSetAsFavorite, asyncDeleteSong} from '../lib/lyricsServices'
import Constants from '../constants/saved'

// async function to get lyrics
export const fetchSavedData = (url) => {
    console.log('fetching saved data');
    return (dispatch) => {        
        dispatch({type: Constants.FETCH_SAVED_DATA})
        getSavedData(url)
            // .then(results => dispatch(loadLyrics(parseLyrics(results))))
            .then(response => dispatch(loadData(response)));
    }
}
// load lyrics action
export const loadData = (saved) => ({type: Constants.DATA_FETCHED, payload: saved.data})
// async function to set favorite
export const setAsFavorite = (id, callback) => {
    console.log('saving favorite');
    return (dispatch) => {
        dispatch({type: Constants.SET_FAVORITE})        
        asyncSetAsFavorite(id)            
            .then(response => {
                dispatch({
                    type: Constants.SET_FAVORITE_RESPONSE, 
                    payload: response.data
                })
                // invoke callback
                callback()
            })
            .catch(err => {
                throw err
            })
    }
}
// async function to delete song
export const deleteSong = (id) => {
    console.log('deleting song');
    return (dispatch) => {
        dispatch({type: Constants.DELETE_SONG})
        asyncDeleteSong(id)            
            .then(response => dispatch({type: Constants.DELETE_SONG_RESPONSE, payload: response.data}))
    }
}