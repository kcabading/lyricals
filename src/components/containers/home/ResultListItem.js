import React from 'react';
import {Link} from 'react-router-dom'
import {List, ListItem} from 'material-ui/List';
import queryString from 'query-string'

export default (props) => {
  let link;
  // parse query params
  let parsedQuery = queryString.parse(props.link);
  console.log(parsedQuery)
  // do we have page query
  if (parsedQuery.p) {
    link = `/more${props.link}`
  } else {
    // build the link
    link = `/lyrics?link=${props.link}`;
  }
    

  return (
    <List style={{padding: "0px"}}>
      <Link to={link}>
        <ListItem              
          primaryText={props.name}
          style={{padding: "0px"}}      
        />
      </Link>
    </List>
  )
}