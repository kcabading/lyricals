import React, {Component} from 'react'
import queryString from 'query-string'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {fetchLyrics, saveFetchedLyrics} from '../../../reducers/lyrics'
import CircularProgress from 'material-ui/CircularProgress'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentSave from 'material-ui/svg-icons/content/save'

class Lyrics extends Component {      
    
    constructor(props) {
        super(props);
        // do we have a link query param
        let parsedQuery = queryString.parse(this.props.location.search);        
        if (parsedQuery.link) {
            // url constructor
            let objUrl = new URL(parsedQuery.link);
            this.props.fetchLyrics(objUrl.pathname)
        }
    }

    onSaveLyrics(evt) {
                
        this.props.saveFetchedLyrics({
            "title": this.props.title,
            "artist": this.props.artist,
            "lyrics": this.props.lyrics,
            "albums": this.props.albums
        });
    }

    render() {               

        let content; 

        const style = {
            right: "20px",
            position: "fixed",            
        };

        if (!this.props.lyricsLoaded) {
            // set circular progress
            content = (
                <CircularProgress size={80} thickness={5} />
            )
        } else {        
            content = (
                <div>
                    <FloatingActionButton style={style} onClick={this.onSaveLyrics.bind(this)}>
                      <ContentSave />
                    </FloatingActionButton>
                    <h1>{this.props.title}</h1>
                    <p>{this.props.artist}</p>
                    <strong>Albums: {this.props.albums.join(',')}</strong> 
                    <div dangerouslySetInnerHTML={{ __html: this.props.lyrics }}>
                    </div>                    
                </div>
            )
        }   
        return content
    }
}

export default withRouter(connect(
    (state) => ({
        title: state.lyrics.title,
        artist: state.lyrics.artist,
        lyrics: state.lyrics.lyrics,
        albums: state.lyrics.albums,
        lyricsLoaded: state.lyrics.lyricsLoaded,
        initLoadingLyrics: state.lyrics.initLoadingLyrics        
    }),
    {fetchLyrics,saveFetchedLyrics}
)(Lyrics))