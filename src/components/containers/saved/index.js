import React, {Component} from 'react'
import {Tabs, Tab} from 'material-ui/Tabs'
import {fetchSavedData} from '../../../reducers/saved'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
// };

class SavedPage extends Component {

  componentDidMount() {
    // load saved lyrics
    this.props.fetchSavedData()

  }

  handleActive(tab) {
    alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
  }

  render() {
    console.log(this.props);    
    let songs,artists,albums;
    // do we have data?
    if (this.props.data) {
      // do we have saved songs?
      if (this.props.data.songs) {
        // loop through
        songs = this.props.data.songs.map((song, index)=> {
          return (
            <div key={index}>
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          )
        })
      }
      // do we have saved artists?
      if (this.props.data.artists) {
        // loop through
        artists = this.props.data.artists.map((artist, index)=> {
          return (
            <div key={index}>
              <h4>{artist.name}</h4>              
            </div>
          )
        })
      }
    }
    
    return (
      <Tabs>
        <Tab label="Songs" >
          <div>            
            {songs}
          </div>
        </Tab>
        <Tab label="Artists" >
          <div>
            <h2>{artists}</h2>
          </div>
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
    (state) => (state.saved),
    {fetchSavedData}
)(SavedPage))