import { DELETE_ARTICLE, ADD_COMMENT_TO_ARTICLE } from '../constants'
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

      delete cloneArticlesState[payload.id]

      return cloneArticlesState

    case ADD_COMMENT_TO_ARTICLE:
      const articlesStateWithNewComment = { ...articlesState }

      articlesStateWithNewComment[payload.articleId].comments.push(
        payload.commentId
      )

      return articlesStateWithNewComment

    default:
      return articlesState
  }
}
