import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import IconStar from 'material-ui/svg-icons/toggle/star';
import IconSettings from 'material-ui/svg-icons/action/settings';

import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Drawer from 'material-ui/Drawer';
import {Link} from 'react-router-dom'


export default (props) => (
    <Drawer
        docked={false}
        width={200}
        open={props.open}
        onRequestChange={props.toggleDrawer}
    >   
        <div style={{textAlign:"left"}}>
            <List>
                <Link to='/' onClick={props.toggleDrawer} ><ListItem primaryText="Home" leftIcon={<ActionHome />} /></Link>
                <Link to='/saved' onClick={props.toggleDrawer} ><ListItem primaryText="Saved" leftIcon={<ContentInbox />} /></Link>
                <Link to='/saved?favorites=true' onClick={props.toggleDrawer}><ListItem primaryText="Favorites" leftIcon={<IconStar />} /></Link>
                <Link to='/settings' onClick={props.toggleDrawer}><ListItem primaryText="Settings" leftIcon={<IconSettings />} /></Link>
            </List>
            <Divider />
            <List>                                
                <Link to='/about' onClick={props.toggleDrawer}><ListItem primaryText="About" rightIcon={<ActionInfo />} /></Link>
                <ListItem primaryText="Donate" rightIcon={<ActionInfo />} />
            </List>        
        </div>
    </Drawer>
);