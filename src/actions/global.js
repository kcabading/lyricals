import {getSavedData} from '../lib/lyricsServices'
import CONSTANTS from '../constants/global'

export const toggleDrawer = () => ({type: CONSTANTS.TOGGLE_MAIN_DRAWER})
// async function to get lyrics
export const fetchSavedData = (callback) => {
    console.log('fetching saved data');
    return (dispatch) => {
        dispatch({type: CONSTANTS.FETCH_SAVED_DATA})
        getSavedData()
            // .then(results => dispatch(loadLyrics(parseLyrics(results))))
            .then(response => dispatch(loadData(response)));            
    }
}

export const initLoading = () => ({type: CONSTANTS.INIT_LOADING})
export const endLoading = () => ({type: CONSTANTS.END_LOADING})

// load lyrics action
export const loadData = (saved) => ({type: CONSTANTS.DATA_FETCHED, payload: saved})

export const createNew = () => ({type: CONSTANTS.CREATE_NEW})

export const closeCreate = () => ({type: CONSTANTS.CREATE_NEW_CLOSE})