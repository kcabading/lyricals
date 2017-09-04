
import {saveLyrics} from '../lib/lyricsServices'
import CONSTANTS from '../constants/create'

export const saveNewLyrics = (data, callback) => {
    
    return (dispatch) => {
        dispatch({type: CONSTANTS.SAVE_NEW_LYRICS})
        saveLyrics(data)
            .then(results => dispatch({type: CONSTANTS.SAVE_NEW_LYRICS_RESPONSE}))
            .then(results => callback(results))
    }
}

export const onFormChange = (inputType, inputValue) => ( {type: CONSTANTS.FORM_CHANGE, payload: {input: inputType, value: inputValue}} )