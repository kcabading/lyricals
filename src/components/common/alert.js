import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class Alert extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            open: props.open,
        };
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() {
        return (
            <div>            
                <Snackbar                    
                    bodyStyle={{opacity:"0.8"}}
                    open={this.state.open}
                    message={this.props.message}   
                    autoHideDuration={3000}             
                    onRequestClose={this.handleRequestClose}
                />
            </div>
        );
    }
}