import { DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({ ...acc, [article.id]: article }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      const cloneArticlesState = { ...articlesState }
      delete cloneArticlesState.article[payload.id]

      return cloneArticlesState

    default:
      return articlesState
  }
}
