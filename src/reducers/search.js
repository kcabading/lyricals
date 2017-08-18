import {getDefault, searchTerm} from '../lib/lyricsServices'
import parseHtml from '../helpers/parseHtml'

const initState = {
    searchInput: "",
    initSearch: false,
    openDrawer: "",
    searchResults : {
        artists: [],
        albums: [],
        songs: []
    }
}

const UPDATE_SEARCH = "UPDATE_SEARCH"
const LOAD_SEARCH_RESULTS = "LOAD_SEARCH_RESULTS"

export const changeSearch = (val) => ({type: UPDATE_SEARCH, payload: val})

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
        default:
            return state;            
    }    
};

// const ActionStrings = {
//     "GET_RESULTS" : "GET_RESULTS",
//     "GET_RESULTS_RESPONSE" : "GET_RESULTS_RESPONSE"
// };


// const initialState = {
//     hydrated: false,
//     loading: false,
//     error: undefined,
//     data: [],
//     pages: {},
//     items: {}
// };
// const reducer = function (state = initialState, action) {

//     if (action.type === ActionStrings.GET_RESULTS) {
//         return Object.assign({}, state, {
//             hydrated: false,
//             loading: true
//         });
//     }

//     if (action.type === ActionStrings.GET_RESULTS_RESPONSE) {
//         return ObjectAssign({}, state, {
//             hydrated: true,
//             loading: false,
//             data: action.response.data,
//             pages: action.response.pages,
//             items: action.response.items
//         });
//     }

//     return state;
// };

// module.exports = reducer;


