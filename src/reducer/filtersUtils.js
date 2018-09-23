import { FILTER_BY_DATE, FILTER_BY_NAME } from '../constants'

// can be added another filters
export const setFilters = (filtersState, payload) => {
  switch (payload.filterType) {
    case FILTER_BY_DATE:
      return {
        ...filtersState,
        datesFilter: {
          from: payload.filterData.from,
          to: payload.filterData.to
        }
      }

    case FILTER_BY_NAME:
      return {
        ...filtersState,
        namesFilter: payload.filterData.selected
      }

    default:
      return filtersState
  }
}

export const filterArticles = (filters, articles) => {
  const { datesFilter, namesFilter } = filters

  const filteredArticles = articles
    .filter((article) => {
      if (!namesFilter.length) return true

      const isElExist = namesFilter.filter((name) => name.value === article.id)
      return isElExist.length
    })
    .filter((article) => {
      if (!datesFilter.from || !datesFilter.to) return true

      const dateFrom = Date.parse(datesFilter.from)
      const dateTo = Date.parse(datesFilter.to)
      const articleDate = Date.parse(article.date)

      if (articleDate >= dateFrom && articleDate <= dateTo) {
        return true
      }
    })

  return {
    namesFilter,
    datesFilter,
    filteredArticles
  }
}
