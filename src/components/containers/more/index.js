import React, { Component } from 'react'
import queryString from 'query-string'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {loadMoreSearchResults} from '../../../actions/more'
import Loading from '../../common/loading'

class MoreSearch extends Component {  

    constructor(props) {
        super(props);        
        // parse query params
        let parsedQuery = queryString.parse(this.props.location.search)
        console.log(parsedQuery)
        // do we have q w and p params
        if (parsedQuery.q && parsedQuery.w && parsedQuery.p) {
            // load selected lyrics
            this.props.loadMoreSearchResults(this.props.location.search)
        }
        // // do we have a link query param
        // if (parsedQuery.link) {            
        //     // url constructor
        //     let objUrl = new URL(parsedQuery.link)            
        //     this.props.fetchLyrics(objUrl.pathname)
        // }
    }

    render() {
        console.log("MORE RENDER");
        return (
            <div className="page search-page">
                {this.props.loading ? <Loading /> : null}
                <p>Loading more results</p>
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        query: state.more.query,
        type: state.more.type,
        page: state.more.page,
        loading: state.more.loading
    }),
    {loadMoreSearchResults}
)(MoreSearch))