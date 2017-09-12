import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import {fetchSavedData} from '../../../actions/saved'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import FavIcon from 'material-ui/svg-icons/action/grade';
import PersonIcon from 'material-ui/svg-icons/social/person';

import {grey400} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import { cyan500 } from 'material-ui/styles/colors';

class SavedPage extends Component {  

  loadSavedLyrics(index, evt){
    // load lyrics
    console.log('lyrics loaded')

    this.props.history.push(`/lyrics?saved=${index}`)
  }

  setAsFavorite(index, evt) {
    console.log('setting favorite at index ' + index)
  }

  deleteLyrics(index, evt) {

    console.log('deleting lyrics at index ' + index)
  }

  render() {

    console.log('SAVED PAGE RENDER')
    let songs, artists, albums, songRightIconMenu, FavoriteAvatar
    // set icon buton
    const iconButtonElement = (
      <IconButton
        touch={true}
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );        
    // do we have saved songs?
    if (this.props.songs.length) {
      // loop through
      songs = this.props.songs.map((song, index)=> {      
        // set favorite
        FavoriteAvatar = <Avatar backgroundColor={ song.favorite ? cyan500 : "" } icon={<FavIcon />} />
        // set button
        songRightIconMenu = (
          <IconMenu iconButtonElement={iconButtonElement}>
            <MenuItem onClick={this.setAsFavorite.bind(this, song.id)}>Favorite</MenuItem>
            <MenuItem onClick={this.deleteLyrics.bind(this, song.id)}>Delete</MenuItem>        
          </IconMenu>
        );
        return (
          <div key={index}>
            <List>      
              <ListItem
                leftAvatar={FavoriteAvatar}                  
                primaryText={song.name}
                secondaryText={song.artist}
                onClick={this.loadSavedLyrics.bind(this, index)}
                rightIconButton={songRightIconMenu}
              />
            </List>
          </div>
        )
      })
    } else {
      songs = <p>Nothing saved locally</p>
    }
    // do we have saved artists?
    if (this.props.artists.length) {
      // loop through
      artists = this.props.artists.map((artist, index)=> {
        return (
          <div key={index}>
              <List>      
                <ListItem      
                  leftAvatar={<Avatar icon={<PersonIcon />} />}
                  primaryText={artist.name}
                  secondaryText="No. of Albums"
                  onClick={this.loadSavedLyrics.bind(this, index)}
                  rightIconButton={songRightIconMenu}
                />
            </List>              
          </div>
        )
      })
    } else {
      artists = <p>Nothing saved locally</p>
    }

    // do we have saved albums?
    if (this.props.albums.length) {
      // loop through
      albums = this.props.albums.map((album, index)=> {
        return (
          <div key={index}>
              <List>      
                <ListItem      
                  leftAvatar={<Avatar icon={<PersonIcon />} />}
                  primaryText={album.name}
                  secondaryText="No. of Albums"
                  onClick={this.loadSavedLyrics.bind(this, index)}
                  rightIconButton={songRightIconMenu}
                />
            </List>              
          </div>
        )
      })
    } else {
      albums = <p>Nothing saved locally</p>
    }  
    
    return (
      <Tabs>
        <Tab label="Songs" >                  
          {songs}          
        </Tab>
        <Tab label="Artists" >          
          {artists}          
        </Tab>
        <Tab label="Albums" >          
          {albums}                      
        </Tab>
      </Tabs>
    );
  }
}

export default withRouter(connect(
    (state) => ({
      songs: state.global.data.songs,
      artists: state.global.data.artists,
      albums: state.global.data.albums,
    }),
    {fetchSavedData}
)(SavedPage))