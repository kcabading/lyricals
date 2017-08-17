import React from 'react';
import TextField from 'material-ui/TextField';

/**
 * Provide props to be passed into the Menu component.
 */
export default (props) => (
  <div>        
    <TextField
      hintText="Search for title, album and artist"
      floatingLabelText="Start here"
      value={props.value}
      onChange={props.onChange}
    />
  </div>      
)