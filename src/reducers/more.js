import Constants from '../constants/more'

const initState = {
    query: "",
    type: "",
    page: "",
    loading: false
}

export default (state = initState, action) => {    
    switch (action.type) {        
        case Constants.LOAD_MORE:      
            return {
                ...state, 
                query: "",
                type: "",
                page: "",
                loading: true                
            }
        case Constants.LOAD_MORE_RESULTS:
            return {
                ...state, 
                query: action.payload.query,
                type: action.payload.type,
                page: action.payload.page,
                loading: false
            }
        default:
            return state;            
    }
};