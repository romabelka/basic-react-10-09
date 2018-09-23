import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import range from './range'

export default combineReducers({
  counter: counterReducer,
  range: range,
  articles
})
