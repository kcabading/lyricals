import React, { Component } from 'react'
import queryString from 'query-string'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {loadMoreSearchResults} from '../../../actions/more'
import Loading from '../../common/loading'

import ResultListItem from '../../ResultListItem.js'

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
    }

    render() {
        console.log("MORE RENDER");
        console.log(this.props)

        let MoreList;

        if (this.props.results.length) {

            MoreList = this.props.results.map( (song, index) => {
                return <ResultListItem {...song} key={index}/>
            })            
        }

        return (
            <div className="page more-page">
                {this.props.loading ? <Loading /> : null}            
                {MoreList}
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({
        query: state.more.query,
        type: state.more.type,
        page: state.more.page,
        results: state.more.results,
        loading: state.more.loading
    }),
    {loadMoreSearchResults}
)(MoreSearch))