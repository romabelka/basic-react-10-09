import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({ ...acc, [article.id]: article }),
  {}
)

export default (articlesState = normalizedArticles, action) => {
  const { type, payload, article, id } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case ADD_COMMENT:
      return articlesState.map((currentArticle) => {
        if (article.id === currentArticle.id) {
          return Object.assign({}, currentArticle, {
            comments: currentArticle.comments.concat(id)
          })
        }
        return currentArticle
      })

    default:
      return articlesState
  }
}
