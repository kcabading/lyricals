import React from 'react';
import {Card} from 'material-ui/Card';

export default (props) => (    
  <Card>
    <h4>{props.title + " - " + props.artist}</h4>
    <p>{props.artist}</p>        
  </Card>    
)