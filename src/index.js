import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
    <Provider store={Store}>
        <MuiThemeProvider><App /></MuiThemeProvider>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();