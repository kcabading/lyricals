import Constants from '../constants/alert'

const initState = {
    show: false,
    type: '',
    message: ''
}

export default (state = initState, action) => {
    switch (action.type) {        
        case Constants.SHOW_ALERT:
            return {
                ...state, 
                show: true,
                type: action.payload.type,
                message: action.payload.message
            }
        case Constants.HIDE_ALERT:
            return {
                ...state,
                show: false,
                type: "",
                message: ""
            }
        default:
            return state;            
    }
};