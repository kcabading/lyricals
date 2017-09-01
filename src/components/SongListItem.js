import React from 'react';
import {Link} from 'react-router-dom'
import history from "../helpers/history";
import {List, ListItem} from 'material-ui/List';

export default (props) => {  
  // build the link
  const link = `/lyrics?link=${props.link}`;  
  return (
    <List>
      <Link to={link}>
        <ListItem              
          primaryText={props.name}        
        />
      </Link>
    </List>
  )
}