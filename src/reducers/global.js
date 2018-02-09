import Constants from '../constants/global'

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
    loading: false,
    loadingMessage: "",
    alert: false,
    alertMessage: ""
}

export default (state = initState, action) => {    
    switch (action.type) {        
        case Constants.TOGGLE_MAIN_DRAWER:
            return {...state, openDrawer: !state.openDrawer}        
         case Constants.FETCH_SAVED_DATA:
            return {
                ...state                          
            }
        case Constants.DATA_FETCHED:

            console.log('data fetched')
            console.log({
                ...state,                             
                songs: action.payload.songs,
                artists: action.payload.artists,
                albums: action.payload.albums,
            })
            return {
                ...state,                             
                data: action.payload                    
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
        case Constants.INIT_LOADING:
            console.log('init loading');
            return {
                ...state,                                                 
                loading: !state.loading
            }
        case Constants.END_LOADING:
            console.log('end loading');
            return {
                ...state,                                                 
                loading: !state.loading
            }
        case Constants.SHOW_ALERT:
            console.log('reducer showing alert')
            return {
                ...state,
                alert: true,
                alertMessage: action.payload
            }
        case Constants.HIDE_ALERT:
            console.log('reducer hiding alert')
            return {
                ...state,
                alert: false,
                alertMessage: ""
            }
        default:
            return state;            
    }
};