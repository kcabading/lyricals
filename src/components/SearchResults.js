import React, {Component} from 'react'
import Divider from 'material-ui/Divider'
import SongListItem from './SongListItem.js'

export default class SearchResults extends Component {    
    render() {
        let SongItemList = this.props.results.map((song, index) => {
            return (
                <SongListItem {...song} key={index}/>
            );
        });        
        return (
            <div>
                <h3>Search Results</h3>
                <Divider />
                <div style={{textAlign:"left",padding:"20px"}}>
                    <div className="artist-results">
                        <h4>Artists</h4>
                    </div>
                    <Divider />
                    <div className="artist-results">
                        <h4>Albums</h4>
                    </div>
                    <Divider />
                    <div className="artist-results">
                        <h4>Songs</h4>   
                        {SongItemList}     
                    </div>
                </div>
            </div>
        );
    }
}