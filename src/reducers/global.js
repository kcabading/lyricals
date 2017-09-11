import CONSTANTS from '../constants/global'

const initState = {
    name: "Kristian Cabading",
    settings: {
        option1: true,
        option2: true
    },
    openDrawer: false,
    openNewLyrics: false,
    data: {
        songs: [],
        albums: [],
        artists: []
    },
    loading: false
}

export default (state = initState, action) => {    
    switch (action.type) {        
        case CONSTANTS.TOGGLE_MAIN_DRAWER:
            return {...state, openDrawer: !state.openDrawer}        
         case CONSTANTS.FETCH_SAVED_DATA:
            return {
                ...state                          
            }
        case CONSTANTS.DATA_FETCHED:

            console.log('data fetched')
            console.log(action.payload.data)
            return {
                ...state,                             
                data: action.payload.data
            }
        // case CONSTANTS.CREATE_NEW:            
        //     return {
        //         ...state,                     
        //         openNewLyrics: true
        //     }
        // case CONSTANTS.CREATE_NEW_CLOSE:
        //     return {
        //         ...state,                                                 
        //         openNewLyrics: false
        //     }
        case CONSTANTS.INIT_LOADING:
            console.log('init loading');
            return {
                ...state,                                                 
                loading: !state.loading
            }
        case CONSTANTS.END_LOADING:
            console.log('end loading');
            return {
                ...state,                                                 
                loading: !state.loading
            }
        default:
            return state;            
    }
};