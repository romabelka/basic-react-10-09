import { combineReducers } from 'redux'
import counter from './counter'
import articles from './articles'
import selectFilter from './selectFilter'
import dateRangeFilter from './dateRangeFilter'

export default combineReducers({
  counter,
  articles,
  selectFilter,
  dateRangeFilter
})
