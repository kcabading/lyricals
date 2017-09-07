import React, {Component} from 'react'
import queryString from 'query-string'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {fetchLyrics,loadSavedLyrics, saveFetchedLyrics} from '../../../actions/lyrics'

import {fetchSavedData} from '../../../actions/global'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentSave from 'material-ui/svg-icons/file/file-download'

import Alert from '../../common/alert'
import Loading from '../../common/loading'

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
            let objUrl = new URL(parsedQuery.link)            
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
                self.props.fetchSavedData();
            }
        });
    }

    render() {               

        let albums, saveButton; 
        console.log('LYRICS RENDER')
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
        // do we have albums?
        if (this.props.albums.length) {
            albums = <strong>Albums: {this.props.albums.join(',')}</strong>
        }

        return (
            <div className="page lyrics-page">
                {this.props.loading ? <Loading /> : null}
                <Alert open={this.props.success} message={this.props.message} />
                {saveButton}                
                <h1>{this.props.name}</h1>
                <p>{this.props.artist}</p>
                {albums}
                <div dangerouslySetInnerHTML={{ __html: this.props.lyrics }}>
                </div>                    
            </div>
        )
    }
}

export default withRouter(connect(
    (state) => ({
        name: state.lyrics.name,
        artist: state.lyrics.artist,
        lyrics: state.lyrics.lyrics,
        albums: state.lyrics.albums,        
        lyricsLoaded: state.lyrics.lyricsLoaded,        
        songs: state.global.data.songs,
        saved: state.lyrics.saved,
        loading: state.lyrics.loading,
        success: state.lyrics.success,
        message: state.lyrics.message
    }),
    {fetchLyrics,fetchSavedData, loadSavedLyrics,saveFetchedLyrics}
)(Lyrics))