import React, {Component} from 'react'
import {withRouter} from 'react-router'
import {connect} from 'react-redux'

import {saveNewLyrics, onFormChange} from '../../../actions/create'

import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider'

import Alert from '../../common/alert'
import Loading from '../../common/loading'

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

        console.log("CREATE PAGE RENDER");
        return (
            <div className="page create-page">
                {this.props.loading ? <Loading /> : null}                             
                <Alert open={this.props.success} message={this.props.message} />
                <TextField        
                    floatingLabelText="Title"           
                    underlineShow={false}
                    fullWidth={true}                        
                    ref={(c) => (this.els.name = c)}
                    value = {this.props.name}
                    onChange = {this.onFormChange.bind(this, "name")}
                />
                <Divider />
                <TextField        
                    floatingLabelText="Artist"
                    underlineShow={false}
                    fullWidth={true}                        
                    ref={(c) => (this.els.artist = c)}
                    value = {this.props.artist}
                    onChange = {this.onFormChange.bind(this, "artist")}
                />
                <Divider />
                <TextField
                    floatingLabelText="Album"
                    underlineShow={false}
                    fullWidth={true}                        
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
                    hintStyle={{top: "10px"}}
                    ref={(c) => (this.els.lyrics = c)}
                    value = {this.props.lyrics}
                    onChange = {this.onFormChange.bind(this, "lyrics")}
                />                 
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
        success: state.create.success,
        message: state.create.message,
        loading: state.create.loading
    }),
    {saveNewLyrics, onFormChange}
)(Create))