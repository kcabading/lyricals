import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import global from './global'
import search from './search'
import lyrics from './lyrics'

export default combineReducers({
  routing: routerReducer,
  global,
  search,
  lyrics
})