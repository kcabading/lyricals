import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import Divider from 'material-ui/Divider';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Drawer from 'material-ui/Drawer';

export default (props) => (
    <Drawer
        docked={false}
        width={200}
        open={props.open}
        onRequestChange={(open) => props.toggleDrawer(!props.open)}
    >   
        <div style={{textAlign:"left"}}>
            <List>
            <ListItem primaryText="Saved" leftIcon={<ContentInbox />} />
            <ListItem primaryText="Favorites" leftIcon={<ActionGrade />} />            
            </List>
            <Divider />
            <List>
            <ListItem primaryText="All mail" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Trash" rightIcon={<ActionInfo />} />
            <ListItem primaryText="Spam" rightIcon={<ActionInfo />} />
            <ListItem primaryText="About" rightIcon={<ActionInfo />} />
            </List>        
        </div>
    </Drawer>
);