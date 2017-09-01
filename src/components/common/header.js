import React from 'react'
import AppBar from 'material-ui/AppBar'
import MainDrawer from './MainDrawer.js'
import FlatButton from 'material-ui/FlatButton';
import Dialog from '../form/dialog'

export default (props) => ( 
    <div className="Header">
        <AppBar
        title="Lyrics Finder"        
        onLeftIconButtonTouchTap={props.toggleDrawer}
        onRightIconButtonTouchTap={props.createNew}
        iconElementRight={<FlatButton label="Create" />}
        style={{ position: "fixed" }}
        />
        <div style={{ paddingTop: 64 }}></div>
        <Dialog open={props.openNewLyrics} handleClose={props.handleClose}/> 
        <MainDrawer toggleDrawer={props.toggleDrawer} open={props.openDrawer}/>
    </div>   
)