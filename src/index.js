import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/containers/app';
import registerServiceWorker from './registerServiceWorker';
import store from './store'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Routes from './routes';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Routes />
            </App>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));

registerServiceWorker();