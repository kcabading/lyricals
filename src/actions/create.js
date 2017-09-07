
import {saveLyrics} from '../lib/lyricsServices'
import CONSTANTS from '../constants/create'
import GlobalConstants from '../constants/global'

export const saveNewLyrics = (data) => {
    


    return (dispatch) => {
        dispatch({type: CONSTANTS.SAVE_NEW_LYRICS})
        dispatch({type: GlobalConstants.INIT_LOADING})
        dispatch({type: GlobalConstants.END_LOADING})        
        // saveLyrics(data)
        //     .then(results => dispatch({type: CONSTANTS.SAVE_NEW_LYRICS_RESPONSE}))
        //     .then(() => dispatch({type: GlobalConstants.END_LOADING}))
        //     .then(() => dispatch({type: GlobalConstants.FETCH_SAVED_DATA}))
    }
}

export const onFormChange = (inputType, inputValue) => ({type: CONSTANTS.FORM_CHANGE, payload: {input: inputType, value: inputValue}} )