import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

import {saveNewLyrics, onFormChange} from '../../../actions/create'

import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';


const inputStyle= {
    marginLeft: 20,
    marginRight: 20
}

class Create extends Component {

    constructor(props) {
        super(props)

        this.els = {};        
    }

    onFormChange(type, evt) {    

        evt.preventDefault();        
        this.props.onFormChange(type,evt.target.value)        
    }

    render() {
        return (
            <div>                
                <Paper zDepth={2}>
                    <TextField        
                        hintText="name"
                        underlineShow={false}
                        fullWidth={true}
                        style={inputStyle}
                        ref={(c) => (this.els.name = c)}
                        value = {this.props.name}
                        onChange = {this.onFormChange.bind(this, "name")}
                    />
                    <Divider />
                    <TextField        
                        hintText="Artist"
                        underlineShow={false}
                        fullWidth={true}
                        style={inputStyle}
                        ref={(c) => (this.els.artist = c)}
                        value = {this.props.artist}
                        onChange = {this.onFormChange.bind(this, "artist")}
                    />
                    <Divider />
                    <TextField
                        hintText="Album"
                        underlineShow={false}
                        fullWidth={true}
                        style={inputStyle}
                        ref={(c) => (this.els.album = c)}
                        value = {this.props.album}
                        onChange = {this.onFormChange.bind(this, "album")}
                    />
                    <Divider />
                    <TextField
                        hintText="Enter Lyrics Here"
                        underlineShow={false}
                        multiLine={true}
                        rows={10}
                        fullWidth={true}
                        style={inputStyle}
                        hintStyle={{top: "10px"}}
                        ref={(c) => (this.els.lyrics = c)}
                        value = {this.props.lyrics}
                        onChange = {this.onFormChange.bind(this, "lyrics")}
                    /> 
                </Paper>
            </div>
        )
    }
}


export default withRouter(connect(
    (state) => ({
        name: state.create.name,
        artist: state.create.artist,
        album: state.create.album,
        lyrics: state.create.lyrics,
        loading: state.create.loading
    }),
    {saveNewLyrics, onFormChange}
)(Create))