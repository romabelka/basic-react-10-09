import { DELETE_ARTICLE, ADD_COMMENT_TO_ARTICLE } from '../constants'
import { normalizedArticles as defaultArticles } from '../fixtures'

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.filter((article) => article.id !== payload.id)

    case ADD_COMMENT_TO_ARTICLE:
      const currentArticle = articlesState.find(
        (article) => article.id === payload.articleId
      )
      const currentArticleUpdated = {
        ...currentArticle,
        comments: [...currentArticle.comments, payload.commentId]
      }

      return articlesState.map(
        (article) =>
          article !== currentArticle ? article : currentArticleUpdated
      )

    default:
      return articlesState
  }
}
