import { DELETE_ARTICLE, ADD_COMMENT_ID_TO_ARTICLE } from '../constants'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce(
  (acc, article) => ({ ...acc, [article.id]: article }),
  {}
)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState
    // return articlesState.filter((article) => article.id !== payload.id)

    case ADD_COMMENT_ID_TO_ARTICLE: {
      const targetArticle = articlesState[payload.articleId]
      return {
        ...articlesState,
        [payload.articleId]: {
          ...targetArticle,
          comments: [
            ...(targetArticle.comments ? targetArticle.comments : []),
            payload.commentId
          ]
        }
      }
    }

    default:
      return articlesState
  }
}
