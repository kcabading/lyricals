import React from 'react';
import {Card} from 'material-ui/Card';

export default (props) => (    
  <Card style={{padding:"5px"}}>
    <h4 style={{margin:" 5px"}}>{props.name}</h4>
    <p><a href={props.link}>{props.link}s</a></p>        
  </Card>    
)