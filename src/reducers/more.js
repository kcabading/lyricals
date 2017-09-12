import Constants from '../constants/more'

const initState = {
    query: "",
    type: "",
    page: "",
    results: [],
    loading: false
}

export default (state = initState, action) => {    
    switch (action.type) {        
        case Constants.LOAD_MORE: 
            console.log('LOAD MORE')
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
        case Constants.LOAD_MORE_RESULTS_RESPONSE:  
        console.log('LOAD SEARCH MORE')          
            return {
                ...state,
                results: action.payload,
                loading: false
            }        
        default:
            return state;            
    }
};