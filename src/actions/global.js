import {getSavedData} from '../lib/lyricsServices'
import Constants from '../constants/global'
import ActionConstants from '../constants/alert'


export const toggleDrawer = () => ({type: Constants.TOGGLE_MAIN_DRAWER})
// // async function to get lyrics
export const fetchSavedData = () => {
    console.log('fetching saved data');
    return (dispatch) => {
        dispatch({type: Constants.FETCH_SAVED_DATA})
        getSavedData()      
            .then(response => dispatch(loadData(response)))
            .catch(err => console.log(err))
    }
}

export const initLoading = () => ({type: Constants.INIT_LOADING})
export const endLoading = () => ({type: Constants.END_LOADING})

export const showAlert = (type, message) => {
    return (dispatch) => {
        dispatch({type: ActionConstants.SHOW_ALERT, payload: {type,message}})
        setTimeout(() => {
            dispatch({type: ActionConstants.HIDE_ALERT})
        },2000)
    }
}

// load lyrics action
export const loadData = (saved) => ({type: Constants.DATA_FETCHED, payload: saved})

// export const createNew = () => ({type: ConstantsCreate.CREATE_NEW})

// export const closeCreate = () => ({type: Constants.CREATE_NEW_CLOSE})