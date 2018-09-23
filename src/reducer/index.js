import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import dateRange from './date-range'
import selectedArticles from './select'

export default combineReducers({
  counter: counterReducer,
  articles,
  dateRange,
  selectedArticles
})
