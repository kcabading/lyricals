import {getSavedData} from '../lib/lyricsServices'

const initState = {
    loading: false,
    data: {
        artists: [],
        albums: [],
        titles: []
    }
}

const FETCH_SAVED_DATA = "FETCH_SAVED_DATA"
const DATA_FETCHED = "DATA_FETCHED"
// async function to get lyrics
export const fetchSavedData = (url) => {
    console.log('fetching saved data');
    return (dispatch) => {
        dispatch({type: FETCH_SAVED_DATA})
        getSavedData(url)
            // .then(results => dispatch(loadLyrics(parseLyrics(results))))
            .then(response => dispatch(loadData(response)));
    }
}
// load lyrics action
export const loadData = (saved) => ({type: DATA_FETCHED, payload: saved.data})

export default (state = initState, action) => {    
    switch (action.type) {        
        case FETCH_SAVED_DATA:
            return {
                ...state, 
                loading: !state.loading                
            }
        case DATA_FETCHED:
            return {
                ...state,                 
                loading: false,                
                data: action.payload
            }
        default:
            return state;            
    }
};