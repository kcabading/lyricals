import React from 'react';
import {Card} from 'material-ui/Card';
import {Link} from 'react-router-dom'

export default (props) => {
  // build the link
  const link = `/lyrics?link=${props.link}`;
  return (
    <Card style={{padding:"5px"}}>
      <Link to={link}><h4 style={{margin:" 5px"}}>{props.name}</h4></Link>
      {/* <p><a href={props.link}>{props.link}s</a></p> */}
    </Card>
  )
}