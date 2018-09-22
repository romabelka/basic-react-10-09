import {
  DELETE_ARTICLE,
  FILTER_ARTICLE_DAY,
  FILTER_ARTICLE_ID
} from '../constants'

import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case FILTER_ARTICLE_DAY:
      return articlesState.filter(
        (article) =>
          Date.parse(article.date) >= Date.parse(payload.day.from) &&
          Date.parse(article.date) <= Date.parse(payload.day.to)
      )
    case FILTER_ARTICLE_ID:
      return articlesState.filter((article) => article.id === payload.id)
  }

  return articlesState
}
