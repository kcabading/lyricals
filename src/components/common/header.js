import React from 'react'
import AppBar from 'material-ui/AppBar'
import MainDrawer from './MainDrawer.js'

export default (props) => ( 
    <div className="Header">
        <AppBar
        title="Lyrics Finder"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={props.toggleDrawer}
        />
        <MainDrawer toggleDrawer={props.toggleDrawer} open={props.openDrawer}/>
    </div>   
)