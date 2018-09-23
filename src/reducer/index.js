import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import select from './select'
import dateRange from './data-range'
import filters from './filters'

export default combineReducers({
  counter: counterReducer,
  articles,
  select,
  dateRange,
  filters
})
