import {DELETE_ARTICLE, FILTER_ARTICLE} from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
  const { type, payload, day } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)
    case FILTER_ARTICLE:
      return articlesState.filter((article) => {
          return Date.parse(day.day) > Date.parse(article.date);
      })
  }

  return articlesState
}
