import {getDefault, searchTerm} from '../lib/lyricsServices'
import parseHtml from '../helpers/parseHtml'
import CONSTANTS from '../constants/search'

// search page
export const loadSearchResults = (results) => ({type: CONSTANTS.LOAD_SEARCH_RESULTS, payload: results})
export const fetchDefault = () => {
    return (dispatch) => {
        getDefault()
            .then(titles => dispatch(loadSearchResults(titles)))
    }
}
export const fetchSearch = (term) => {
    console.log('TERM', term);  
    return (dispatch) => {
        dispatch({type: CONSTANTS.UPDATE_SEARCH, payload: term})
        searchTerm(term)
            .then(results => dispatch(loadSearchResults(parseHtml(results))))
    }
}