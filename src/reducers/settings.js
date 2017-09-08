import Constants from '../constants/settings'

const initState = {
    loading: false,
    option1: true
}

export default (state = initState, action) => {    
    switch (action.type) {        
        case Constants.SETTINGS_SAVE:
            return {
                ...state, 
                loading: true
            }
        case Constants.SETTINGS_SAVE_RESPONSE:
            return {
                ...state,                 
                loading: false
            }
        default:
            return state;            
    }
};