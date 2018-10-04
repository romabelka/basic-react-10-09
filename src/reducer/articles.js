import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

const defaultArticles = normalizedArticles.reduce((acc, article) => {
  acc[article.id] = article
  return acc
}, {})

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action
  const newArticles = { ...articlesState }

  switch (type) {
    case DELETE_ARTICLE:
      delete newArticles[payload.id]
      return newArticles

    case ADD_COMMENT:
      const articleId = payload.id
      const article = newArticles[payload.id]
      const { comments } = article
      const newComments = comments.slice()
      newComments.unshift(payload.newId)
      newArticles[articleId] = { ...article, comments: newComments }
      return newArticles

    default:
      return articlesState
  }
}
