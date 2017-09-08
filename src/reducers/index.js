import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import global from './global'
import search from './search'
import more from './more'
import lyrics from './lyrics'
import saved from './saved'
import create from './create'

export default combineReducers({
  routing: routerReducer,
  global,
  search,
  more,
  lyrics,
  saved,
  create
})