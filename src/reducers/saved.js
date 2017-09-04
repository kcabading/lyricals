import CONSTANTS from '../constants/saved'

const initState = {
    loading: false,
    data: {
        artists: []        
    }
}

export default (state = initState, action) => {    
    switch (action.type) {        
        case CONSTANTS.FETCH_SAVED_DATA:
            return {
                ...state, 
                loading: !state.loading                
            }
        case CONSTANTS.DATA_FETCHED:
            return {
                ...state,                 
                loading: false,                
                data: action.payload
            }
        default:
            return state;            
    }
};