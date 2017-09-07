import React, {Component} from 'react'
import Divider from 'material-ui/Divider'
import SongListItem from './SongListItem.js'
import ArtistListItem from './SongListItem.js'
import AlbumListItem from './SongListItem.js'
import {connect} from 'react-redux';
import {fetchDefault} from '../actions/search'
import {fetchLyrics} from '../actions/lyrics'
import LinearProgress from 'material-ui/LinearProgress';

class SearchResults extends Component {    
    
    render() {      
        // 
        let ArtistItemList, AlbumItemList, SongItemList;
        // check if search is initiated
        if (this.props.initLoadingLyrics) {
            // set as loading
            ArtistItemList = AlbumItemList = SongItemList =  <LinearProgress mode="indeterminate" />
        } else {

            if (this.props.searchResults.artists.length) {
                ArtistItemList = this.props.searchResults.artists.map((song, index) => {                
                    return (
                        <ArtistListItem {...song} key={index}/>
                    );
                });
            } else {
                ArtistItemList = <p>No Artist Found</p>
            }
            if (this.props.searchResults.albums.length) {
                AlbumItemList = this.props.searchResults.albums.map((song, index) => {
                    return (
                        <AlbumListItem {...song} key={index}/>
                    );
                });
            } else {
                AlbumItemList = <p>No Album Found</p>
            }

            if (this.props.searchResults.songs.length) {
                SongItemList = this.props.searchResults.songs.map((song, index) => {
                    return (
                        <SongListItem {...song} key={index} fetchLyrics={this.props.fetchLyrics}/>
                    );
                });
            } else {
                SongItemList = <p>No Song Found</p>
            }
        }
        return (
            <div className="SearchResults">
                {/* <pre>{JSON.stringify(this.props, null, " ")}</pre> */}
                <h3>Search Results</h3>
                <Divider />
                <div style={{textAlign:"left",padding:"20px"}}>
                    <div className="artist-results">
                        <h4 className="category">Artists</h4>
                        {ArtistItemList}
                    </div>
                    <Divider />
                    <div className="artist-results">
                        <h4 className="category">Albums</h4>
                        {AlbumItemList}
                    </div>
                    <Divider />
                    <div className="artist-results">
                        <h4 className="category">Songs</h4>                        
                        {SongItemList}
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => ({
        searchResults: state.search.searchResults,
        initLoadingLyrics: state.search.initLoadingLyrics
    }),
    {fetchDefault,fetchLyrics}    
)(SearchResults)