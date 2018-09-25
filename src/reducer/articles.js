import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'

export default (articlesState = defaultArticles, action) => {
  const { type, payload, article } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case ADD_COMMENT:
      return articlesState.map((currentArticle) => {
        if (article.id === currentArticle.id) {
          let id = 'test'
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
