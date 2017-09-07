
import {saveLyrics} from '../lib/lyricsServices'
import Constants from '../constants/create'

export const saveNewLyrics = (data, callback) => {

    return (dispatch) => {
        dispatch({type: Constants.SAVE_NEW_LYRICS})        
        saveLyrics(data)
            .then(results => {                
                if (callback) {
                    callback(null, results)
                }
                dispatch({type: Constants.SAVE_NEW_LYRICS_RESPONSE})                                                
            })
            .catch(err=> console.log(err))
    }
}

export const onFormChange = (inputType, inputValue) => ({type: Constants.FORM_CHANGE, payload: {input: inputType, value: inputValue}} )