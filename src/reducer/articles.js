import { DELETE_ARTICLE, FILTER_ARTICLES } from '../constants'
import defaultArticles from '../fixtures'

const defaultArticlesState = {
  list: defaultArticles || [],
  filter: {
    from: null,
    to: null,
    selected: []
  }
}

export default (articlesState = defaultArticlesState, action) => {
  const { type, payload } = action
  const newArticlesState = Object.assign({}, articlesState)

  switch (type) {
    case DELETE_ARTICLE:
      newArticlesState.list = newArticlesState.list.filter(
        (article) => article.id !== payload.id
      )
      return newArticlesState
    case FILTER_ARTICLES:
      newArticlesState.filter = { ...newArticlesState.filter, ...payload }
      return newArticlesState
  }

  return articlesState
}
