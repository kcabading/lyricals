import Constants from '../constants/more'

// search page
// export const loadSearchResults = (results) => ({type: CONSTANTS.LOAD_SEARCH_RESULTS, payload: results})
// export const fetchDefault = () => {
//     return (dispatch) => {
//         getDefault()
//             .then(titles => dispatch(loadSearchResults(titles)))
//     }
// }
export const loadMoreSearchResults = (query) => {
    console.log('MORE RESULTS', query);
    return (dispatch) => {
        dispatch({type: Constants.LOAD_MORE})
        // searchTerm(term)
        //     .then(results => dispatch(loadSearchResults(parseHtml(results))))
    }
}