import React, {Component} from 'react'
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

import queryString from 'query-string'

import {Tabs, Tab} from 'material-ui/Tabs'
import {setAsFavorite, deleteSong} from '../../../actions/saved'
import {showAlert} from '../../../actions/global'

class SavedPage extends Component {  

  constructor(props) {
    super(props)
    // local state for changing favorites
    this.state = {
      favorites : false
    }    
  }

  componentWillReceiveProps(props) {    
    console.log("COMPONENT RECEIVE PROPS")
    console.log(props)
    // parse query params
    let parsedQuery = queryString.parse(props.location.search)
    // check query favorite
    this.setState({
      favorites: parsedQuery.favorites
    })
  }

  loadSavedLyrics(index, evt){
    this.props.history.push(`/lyrics?saved=${index}`)
  }

  onSetAsFavorite(id, evt) {    
    this.props.setAsFavorite(id, () => {
      this.props.showAlert('success','Success')
    })
  }

  onDeleteLyrics(id, evt) {    
    this.props.deleteSong(id)
  }

  render() {
    
    console.log('SAVED PAGE RENDER PROPS')
    console.log(this.props)

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
    if (this.props.data.songs.length) {
      let songList;

      if (this.state.favorites) {        
        // filter favorite songs
        songList = this.props.data.songs.filter((song, index) => {
          return song.favorite === true
        })
      } else {
        songList = this.props.data.songs
      }
      // loop through
      songs = songList.map((song, index)=> {
        // set favorite
        FavoriteAvatar = <Avatar backgroundColor={ song.favorite ? cyan500 : "" } icon={<FavIcon />} />
        if (this.props.favorite) {

        }
        // set button
        songRightIconMenu = (
          <IconMenu iconButtonElement={iconButtonElement}>
            <MenuItem onClick={this.onSetAsFavorite.bind(this, song.id)}>Favorite</MenuItem>
            <MenuItem onClick={this.onDeleteLyrics.bind(this, song.id)}>Delete</MenuItem>        
          </IconMenu>
        );
        return (
          <div key={index}>
            <List style={{padding: "0px"}}>      
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
    if (this.props.data.artists.length) {
      // loop through
      artists = this.props.data.artists.map((artist, index)=> {
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
    if (this.props.data.albums.length) {
      // loop through
      albums = this.props.data.albums.map((album, index)=> {
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
      <div className="page saved-page">        
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
      </div>
    );
  }
}

export default withRouter(connect(
    (state) => ({
      data: state.global.data,       
      favorites: state.saved.favorites
    }),
    {setAsFavorite, deleteSong, showAlert}
)(SavedPage))