import Contants from '../constants/saved'

const initState = {
    loading: false,    
}

export default (state = initState, action) => {    
    switch (action.type) {        
        case Contants.FETCH_SAVED_DATA:
            return {
                ...state, 
                loading: !state.loading                
            }
        case Contants.DATA_FETCHED:
            return {
                ...state,                 
                loading: false,                
                data: action.payload
            }
        case Contants.SET_FAVORITE_RESPONSE:

            console.log('REDUCER SET FAVORITE RESPONSE')
            return {
                ...state,                 
                loading: false,
                data: action.payload
            }
        default:
            return state;            
    }
};