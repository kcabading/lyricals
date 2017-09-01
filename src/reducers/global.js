
import {getSavedData} from '../lib/lyricsServices'

const initState = {
    name: "Kristian Cabading",
    settings: {
        option1: true,
        option2: true
    },
    openDrawer: false,
    openNewLyrics: false,
    data: {}    
}

// global


const FETCH_SAVED_DATA = "FETCH_SAVED_DATA"
const DATA_FETCHED = "DATA_FETCHED"
const TOGGLE_MAIN_DRAWER = "TOGGLE_MAIN_DRAWER"
const CREATE_NEW = "CREATE_NEW"
const CREATE_NEW_CLOSE = "CREATE_NEW_CLOSE"

export const toggleDrawer = () => ({type: TOGGLE_MAIN_DRAWER})

// async function to get lyrics
export const fetchSavedData = () => {
    console.log('fetching saved data');
    return (dispatch) => {
        dispatch({type: FETCH_SAVED_DATA})
        getSavedData()
            // .then(results => dispatch(loadLyrics(parseLyrics(results))))
            .then(response => dispatch(loadData(response)));
    }
}

// load lyrics action
export const loadData = (saved) => ({type: DATA_FETCHED, payload: saved})

export const createNew = () => ({type: CREATE_NEW})

export const handleClose = () => ({type: CREATE_NEW_CLOSE})

export default (state = initState, action) => {    
    switch (action.type) {        
        case TOGGLE_MAIN_DRAWER:
            return {...state, openDrawer: !state.openDrawer}        
         case FETCH_SAVED_DATA:
            return {
                ...state, 
                loading: !state.loading                
            }
        case DATA_FETCHED:            
            return {
                ...state,                 
                loading: false,                
                data: action.payload.data
            }
        case CREATE_NEW:
            return {
                ...state,                     
                openNewLyrics: true
            }
        case CREATE_NEW_CLOSE:
            return {
                ...state,                                                 
                openNewLyrics: false
            }
        default:
            return state;            
    }
};