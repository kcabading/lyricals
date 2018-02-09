import Constants from '../constants/saved'

const initState = {    
    favorites: false
}

export default (state = initState, action) => {    
    switch (action.type) {        
        // case Constants.FETCH_SAVED_DATA:
        //     console.log('REDUCER FETCH_SAVED_DATA')            
        //     return {
        //         ...state, 
        //         loading: !state.loading
        //     }
        // case Constants.DATA_FETCHED:
        //     console.log('DATA_FETCHED')
        //     console.log(action.payload)
        //     return {
        //         ...state,                 
        //         loading: false,                
        //         data: action.payload.data,
        //         favorites: false
        //     }
        case Constants.SET_FAVORITE_RESPONSE:

            console.log('REDUCER SET FAVORITE RESPONSE')
            console.log(action.payload)
            return {
                ...state,                 
                loading: false,
                showFavoriteSuccess: true,
                data: action.payload
            }
        case Constants.DELETE_SONG_RESPONSE:
            console.log('REDUCER DELETE SONG RESPONSE')
            console.log(action.payload)
            return {
                ...state,                 
                loading: false,
                showDeleteSuccess: true,
                data: action.payload
            }        
        default:
            return state;            
    }
};