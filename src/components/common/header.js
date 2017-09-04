import React from 'react'
import AppBar from 'material-ui/AppBar'
import MainDrawer from './MainDrawer.js'
import FlatButton from 'material-ui/FlatButton';
import Dialog from '../form/dialog'

export default (props) => {
    // initiliase button
    let headerButton = <FlatButton label={props.location.pathname === '/create' ? "Save" : "Create"} />    
    let headerButtonAction;
    // if we are on the create page
    if (props.location.pathname === '/create') {
        headerButton = <FlatButton label="Save" />
        headerButtonAction = props.saveNewLyrics
    } else {
        headerButton = <FlatButton label="Create" />
        headerButtonAction = () => props.history.push('/create')
    }

    return (
        <div className="Header">
            <AppBar
            title="Lyrics Finder"        
            onLeftIconButtonTouchTap={props.toggleDrawer}
            onRightIconButtonTouchTap={headerButtonAction}
            iconElementRight={headerButton}
            style={{ position: "fixed" }}
            />            
            <Dialog open={props.openNewLyrics} closeCreate={props.closeCreate}/> 
            <MainDrawer toggleDrawer={props.toggleDrawer} open={props.openDrawer}/>
        </div>
    )
}