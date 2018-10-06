import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'

const objArticles = normalizedArticles.reduce(
  (acc, article) => ({
    ...acc,
    [article.id]: article
  }),
  {}
)

export default (articlesState = objArticles, action) => {
  const { type, payload } = action
  console.log('values of payload', action)

  switch (type) {
    case DELETE_ARTICLE:
      const articlesCopy = { ...articlesState }
      delete articlesCopy[payload.id]
      return articlesCopy

    case ADD_COMMENT:
      const article = articlesState[payload.articleId]

    default:
      return articlesState
  }
}
