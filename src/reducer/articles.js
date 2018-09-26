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
      return Object.values(articlesState)
        .filter((article) => article.id !== payload.id)
        .reduce((acc, article) => ({ ...acc, [article.id]: article }), {})

    case ADD_COMMENT_TO_ARTICLE:
      const currentArticle = articlesState[payload.articleId]
      const currentArticleUpdated = {
        ...currentArticle,
        comments: [...currentArticle.comments, payload.commentId]
      }

      return Object.values(articlesState)
        .map(
          (article) =>
            article !== currentArticle ? article : currentArticleUpdated
        )
        .reduce((acc, article) => ({ ...acc, [article.id]: article }), {})

    default:
      return articlesState
  }
}
