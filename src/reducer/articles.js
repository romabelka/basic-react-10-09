import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'
import defaultArticles from '../fixtures'

const defaultArticlesList = {
  list: defaultArticles,
  filter: {
    from: null,
    to: null,
    selected: null
  }
}

export default (articlesState = defaultArticlesList, action) => {
  const { type, payload } = action
  const newArticle = Object.assign({}, articlesState)

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.list.filter((article) => article.id !== payload.id)
    case FILTER_ARTICLES:
      newArticle.filter = { ...newArticle.filter, ...payload }
      return newArticle
  }

  return articlesState
}
