import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Store from './store'

const render = () => {
    const initState = Store.getState();
    ReactDOM.render(<MuiThemeProvider><App {...initState}/></MuiThemeProvider>, document.getElementById('root'));
}
render();
Store.subscribe(render);
registerServiceWorker();