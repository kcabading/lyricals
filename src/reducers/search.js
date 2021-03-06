import CONSTANTS from '../constants/search'

const initState = {
    searchInput: "",
    initSearch: false,
    initLoading: false,    
    searchResults : {
        artists: [],
        albums: [],
        songs: []
    },
    initLoadingLyrics: false,
    lyricsLoaded: false,
    lyrics: ""
}
export default (state = initState, action) => {    
    switch (action.type) {        
        case CONSTANTS.INIT_SEARCH:            
            return {...state, searchInput: action.payload, initLoadingLyrics: true  }
        case CONSTANTS.LOAD_SEARCH_RESULTS:
            return {...state, searchResults: action.payload, initLoadingLyrics: false}        
        default:
            return state;            
    }
};