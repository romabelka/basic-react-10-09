import { combineReducers } from 'redux'
import counterReducer from './counter'
import dateRangeReducer from './date-range.js'
import selectArticleReducer from './select-article.js'
import articles from './articles'

export default combineReducers({
  counter: counterReducer,
  dateRange: dateRangeReducer,
  selectArticle: selectArticleReducer,
  articles
})
