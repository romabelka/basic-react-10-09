import { ADD_COMMENT, DELETE_ARTICLE } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case ADD_COMMENT:
      return articlesState.filter((article) => {
        if (article.id === payload.articleId) {
          if (article.comments) {
            article.comments.push(payload.commentId)
          } else {
            article.comments = []
            article.comments.push(payload.commentId)
          }
        }
        return article
      })
    default:
      return articlesState
  }
}
