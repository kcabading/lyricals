import Constants from '../constants/more'
import {getMoreResults} from '../lib/lyricsServices'
import parseMoreResults from '../helpers/parseMoreResults'

// search page
export const loadSearchResults = (results) => ({type: Constants.LOAD_MORE_RESULTS_RESPONSE, payload: results})
export const loadMoreSearchResults = (query) => {    
    return (dispatch) => {
        dispatch({type: Constants.LOAD_MORE})
        getMoreResults(query)
            .then(results => dispatch(loadSearchResults(parseMoreResults(results))))
    }
}