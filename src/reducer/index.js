import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import likeReducer from './likeCreator'

export default combineReducers({
  counter: counterReducer,
  likeCreator: likeReducer,
  articles
})
