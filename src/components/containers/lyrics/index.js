import React, {Component} from 'react'
import queryString from 'query-string'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {fetchLyrics} from '../../../reducers/search'

class Song extends Component {      
    
    constructor(props) {
        super(props);
        // do we have a link query param
        let parsedQuery = queryString.parse(this.props.location.search);        
        console.log(props)
        if (parsedQuery.link) {
            this.props.fetchLyrics(parsedQuery.link)
        } 
    }

    render() {       
           
        // show list of saved songs
        let content = (
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: this.props.title }}></h1>
                <div dangerouslySetInnerHTML={{ __html: this.props.lyrics }}>
                </div>
            </div>
        )
            
        return (
            <div>
                {content}
            </div>
        )
    }
}

export default withRouter(connect(
    (state) => ({
        title: state.lyrics.title,
        lyrics:state.lyrics.lyrics,
        lyricsLoaded: state.lyrics.lyricsLoaded,
        initLoadingLyrics: state.lyrics.initLoadingLyrics
    }),
    {fetchLyrics}
)(Song))