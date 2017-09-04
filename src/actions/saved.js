import {getSavedData} from '../lib/lyricsServices'
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