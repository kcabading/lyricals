import React, {Component} from 'react'
import { withRouter } from 'react-router'
import {connect} from 'react-redux'

import AppBar from 'material-ui/AppBar'
import MainDrawer from './MainDrawer.js'
import FlatButton from 'material-ui/FlatButton';
import Dialog from '../form/dialog'

import {toggleDrawer} from '../../actions/global'

class Header extends Component {

    render() {
        // initiliase button
        let headerButton = <FlatButton label={this.props.location.pathname === '/create' ? "Save" : "Create"} />    
        let headerButtonAction;
        // if we are on the create page
        if (this.props.location.pathname === '/create') {
            headerButton = <FlatButton label="Save" />
            headerButtonAction = this.props.saveNewLyrics
        } else {
            headerButton = <FlatButton label="Create" />
            headerButtonAction = () => this.props.history.push('/create')
        }

        return (
            <div className="Header">
                <AppBar
                title="Lyricals"        
                onLeftIconButtonTouchTap={this.props.toggleDrawer}
                onRightIconButtonTouchTap={headerButtonAction}
                iconElementRight={headerButton}
                style={{ position: "fixed" }}
                />            
                <Dialog open={this.props.openNewLyrics} closeCreate={this.props.closeCreate}/> 
                <MainDrawer toggleDrawer={this.props.toggleDrawer} open={this.props.openDrawer}/>
            </div>
        )
    }
}

export default withRouter(connect(
    (state) => ({      
      openDrawer: state.global.openDrawer      
    }),
    {toggleDrawer}
)(Header))