import { DELETE_ARTICLE, RESTORE_ARTICLES } from '../constants'
import defaultArticles from '../fixtures'

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)
    case RESTORE_ARTICLES:
      return defaultArticles
    default:
      return articlesState
  }
}
