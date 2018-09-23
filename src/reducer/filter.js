import { FILTER_ARTICLES, DELETE_ARTICLE } from '../constants'
import { setFilters, filterArticles } from './filtersUtils'
import defaultArticles from '../fixtures'

const defaultFilters = {
  namesFilter: [],
  datesFilter: {
    from: null,
    to: null
  },
  filteredArticles: defaultArticles
}

export default (filtersState = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_ARTICLES:
      const filters = payload ? setFilters(filtersState, payload) : filtersState

      return filterArticles(filters, payload.articles)

    case DELETE_ARTICLE:
      const filteredArticles = filtersState.filteredArticles.filter(
        (article) => article.id !== payload.id
      )

      return {
        ...filtersState,
        filteredArticles
      }

    default:
  }

  return filtersState
}
