import { DELETE_ARTICLE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import reduceDataIntoObject from '../utils/reduce-data'

const defaultArticles = reduceDataIntoObject(normalizedArticles)

export default (articlesState = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case DELETE_ARTICLE:
      const articles = { ...articlesState }
      delete articles[payload.id]
      return articles

    case ADD_COMMENT:
      const article = { ...articlesState[payload.articleId] }
      article.comments = [...article.comments, payload.generatedId]
      return { ...articlesState, [payload.articleId]: article }

    default:
      return articlesState
  }
}
