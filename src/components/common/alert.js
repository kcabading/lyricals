import React from 'react';
import Snackbar from 'material-ui/Snackbar';

import {connect} from 'react-redux'
import { withRouter } from 'react-router'

class Alert extends React.Component {
    render() {
        return (
            <div>            
                <Snackbar
                    bodyStyle={{opacity:"0.8"}}
                    open={this.props.show}
                    message={this.props.message}                    
                />
            </div>
        );
    }
}

export default withRouter(connect(
    (state) => ({      
      show: state.alert.show,
      type: state.alert.type,      
      message: state.alert.message
    })    
)(Alert))