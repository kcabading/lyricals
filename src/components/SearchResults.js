import React, {Component} from 'react'
import {connect} from 'react-redux';

import Divider from 'material-ui/Divider'
import ResultListItem from './ResultListItem.js'
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

            console.log('SEARCH RESULTS');
            console.log(this.props)

            if (this.props.searchResults.artists.length) {
                ArtistItemList = this.props.searchResults.artists.map((song, index) => {                
                    return (
                        <ResultListItem {...song} key={index}/>
                    );
                });
            } else {
                ArtistItemList = <p>No Artist Found</p>
            }
            if (this.props.searchResults.albums.length) {
                AlbumItemList = this.props.searchResults.albums.map((song, index) => {
                    return (
                        <ResultListItem {...song} key={index}/>
                    );
                });
            } else {
                AlbumItemList = <p>No Album Found</p>
            }

            if (this.props.searchResults.songs.length) {
                SongItemList = this.props.searchResults.songs.map((song, index) => {
                    return (
                        <ResultListItem {...song} key={index} fetchLyrics={this.props.fetchLyrics}/>
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

export default SearchResults