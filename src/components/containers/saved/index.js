import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import {fetchSavedData} from '../../../reducers/saved'
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

  handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }

  loadSavedLyrics(index, evt){
    // load lyrics
    console.log('lyrics loaded')

    this.props.history.push(`/lyrics?saved=${index}`)
  }

  render() {
    console.log(this.props);    
    let songs,artists,albums;

    const iconButtonElement = (
      <IconButton
        touch={true}
      >
        <MoreVertIcon color={grey400} />
      </IconButton>
    );
    const songRightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}>
        <MenuItem>Favorite</MenuItem>
        <MenuItem>Delete</MenuItem>        
      </IconMenu>
    );
    // do we have data?
    if (this.props.saved.data) {
      // do we have saved songs?
      if (this.props.saved.data.songs) {
        // loop through
        songs = this.props.saved.data.songs.map((song, index)=> {          
          // set avatar favorite
          let FavoriteAvatar = <Avatar backgroundColor={ song.favorite ? cyan500 : "" } icon={<FavIcon />} />
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
      }
      // do we have saved artists?
      if (this.props.saved.data.artists) {
        // loop through
        artists = this.props.saved.data.artists.map((artist, index)=> {
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
      }
    }
    
    return (
      <Tabs>
        <Tab label="Songs" >                  
            {songs}          
        </Tab>
        <Tab label="Artists" >          
            {artists}          
        </Tab>
        <Tab
          label="Albums"
          data-route="/home"
          onActive={this.handleActive.bind(this)}
        >
          <div>
            {albums}            
          </div>
        </Tab>
      </Tabs>
    );
  }
}

export default withRouter(connect(
    (state) => ({
      saved: state.global
    }),
    {fetchSavedData}
)(SavedPage))