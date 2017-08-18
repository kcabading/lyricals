import React from 'react';
import {Card} from 'material-ui/Card';

export default (props) => (    
  <Card>
    <h4>{props.name}</h4>
    <p><a href={props.link}>{props.link}</a></p>        
  </Card>    
)