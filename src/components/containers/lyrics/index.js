import React, {Component} from 'react'
import queryString from 'query-string'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {fetchLyrics,loadSavedLyrics, saveFetchedLyrics} from '../../../reducers/lyrics'

import {loadData} from '../../../reducers/global'
import CircularProgress from 'material-ui/CircularProgress'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentSave from 'material-ui/svg-icons/content/save'

class Lyrics extends Component {      
    
    constructor(props) {
        super(props);       
        // parse query params
        let parsedQuery = queryString.parse(this.props.location.search);
        // do we have save param
        if (parsedQuery.saved) {
            // load selected lyrics
            this.props.loadSavedLyrics(this.props.songs[parsedQuery.saved], true)
        } 
        // do we have a link query param
        if (parsedQuery.link) {            
            // url constructor
            let objUrl = new URL(parsedQuery.link);
            this.props.fetchLyrics(objUrl.pathname)                      
        }
    }

    onSaveLyrics(evt) {        
        let self = this;
        // save lyrics
        this.props.saveFetchedLyrics({
            "name": this.props.name,
            "artist": this.props.artist,
            "lyrics": this.props.lyrics,
            "albums": this.props.albums
        }, function(res){            
            if(res) {
                self.props.loadData(JSON.parse(res));
            }
        });
    }

    render() {               

        let content, saveButton; 

        const style = {
            right: "20px",
            bottom: "70px",
            position: "fixed",            
        };
        // if not yet saved
        if (!this.props.saved) {
            saveButton = (            
                    <FloatingActionButton style={style} onClick={this.onSaveLyrics.bind(this)}>
                        <ContentSave />
                    </FloatingActionButton>
            );
        }
        if (!this.props.lyricsLoaded) {
            // set circular progress
            content = (
                <CircularProgress size={80} thickness={5} />
            )
        } else {        
            content = (
                <div>     
                    {saveButton}               
                    <h1>{this.props.name}</h1>
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
        name: state.lyrics.name,
        artist: state.lyrics.artist,
        lyrics: state.lyrics.lyrics,
        albums: state.lyrics.albums,        
        lyricsLoaded: state.lyrics.lyricsLoaded,
        initLoadingLyrics: state.lyrics.initLoadingLyrics,
        songs: state.global.data.songs,
        saved: state.lyrics.saved
    }),
    {fetchLyrics,loadData, loadSavedLyrics,saveFetchedLyrics}
)(Lyrics))