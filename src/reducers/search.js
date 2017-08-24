import {getDefault, searchTerm} from '../lib/lyricsServices'
import parseHtml from '../helpers/parseHtml'

const initState = {
    searchInput: "",
    initSearch: false,
    initLoading: false,
    openDrawer: false,
    searchResults : {
        artists: [],
        albums: [],
        songs: []
    },
    initLoadingLyrics: false,
    lyricsLoaded: false,
    lyrics: ""
}

const UPDATE_SEARCH = "UPDATE_SEARCH"
const LOAD_SEARCH_RESULTS = "LOAD_SEARCH_RESULTS"
const TOGGLE_MAIN_DRAWER = "TOGGLE_MAIN_DRAWER"

// global
export const toggleDrawer = () => ({type: TOGGLE_MAIN_DRAWER})


// search page
export const loadSearchResults = (results) => ({type: LOAD_SEARCH_RESULTS, payload: results})
export const fetchDefault = () => {
    return (dispatch) => {
        getDefault()
            .then(titles => dispatch(loadSearchResults(titles)))
    }
}
export const fetchSearch = (term) => {
    console.log('TERM', term);  
    return (dispatch) => {
        dispatch({type: UPDATE_SEARCH, payload: term})
        searchTerm(term)
            .then(results => dispatch(loadSearchResults(parseHtml(results))))
    }
}

export default (state = initState, action) => {    
    switch (action.type) {        
        case UPDATE_SEARCH:            
            return {...state, searchInput: action.payload, initSearch: action.payload ? true : false  }
        case LOAD_SEARCH_RESULTS:
            return {...state, searchResults: action.payload}
        case TOGGLE_MAIN_DRAWER:
            console.log('toggle main drawer');
            return {...state, openDrawer: !state.openDrawer}
        default:
            return state;            
    }
};