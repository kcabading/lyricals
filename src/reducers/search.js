import {getDefault, searchTerm, getLyrics} from '../lib/lyricsServices'
import parseHtml from '../helpers/parseHtml'
import parseLyrics from '../helpers/parseLyrics'

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
const FETCH_LYRICS = "FETCH_LYRICS"
const LYRICS_FETCHED = "LYRICS_FETCHED"

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


// songs page
export const fetchLyrics = (url) => {
    console.log('fetching lyrics');
    return (dispatch) => {
        dispatch({type: FETCH_LYRICS})
        getLyrics(url)
            // .then(results => dispatch(loadLyrics(parseLyrics(results))))
            .then(results => dispatch(loadLyrics(parseLyrics(results))));
    }
}

export const loadLyrics = (lyrics) => ({type: LYRICS_FETCHED, payload: lyrics})

export default (state = initState, action) => {    
    switch (action.type) {        
        case UPDATE_SEARCH:            
            return {...state, searchInput: action.payload, initSearch: action.payload ? true : false  }
        case LOAD_SEARCH_RESULTS:
            return {...state, searchResults: action.payload}
        case TOGGLE_MAIN_DRAWER:
            console.log('toggle main drawer');
            return {...state, openDrawer: !state.openDrawer}
        case FETCH_LYRICS:
            return {
                ...state, 
                initLoadingLyrics: !state.initLoadingLyrics,
                lyricsLoaded: false,
            }
        case LYRICS_FETCHED:
            return {
                ...state,                 
                initLoadingLyrics: false,
                lyricsLoaded: true,
                lyrics: action.payload.lyrics,
                title: action.payload.title
            }
        default:
            return state;            
    }
};