import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default (props) => {
  
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={props.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}        
        onClick={props.handleClose}
      />,
    ];

    return (
      <Dialog
          title="Create New Lyrics"
          actions={actions}
          modal={false}
          open={props.open}
          onRequestClose={props.handleClose}
        >
          Enter lyrics here
        </Dialog>
    );  
}