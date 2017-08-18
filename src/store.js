import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers/search'
import thunk from 'redux-thunk'

export default createStore(reducer,applyMiddleware(thunk))