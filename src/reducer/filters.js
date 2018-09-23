import { FILTER_ARTICLES } from '../constants'
import { getFilterData } from './filtersUtils'

const defaultFilters = {
  selectedArticles: [],
  selectedDate: {
    from: null,
    to: null
  }
}

export default (filtersState = defaultFilters, action) => {
  const { type, payload } = action
  const updatedFiltersState = payload
    ? getFilterData(filtersState, payload)
    : filtersState

  switch (type) {
    case FILTER_ARTICLES:
      // todo - here should be a function with filtering
      return updatedFiltersState

    default:
  }

  return filtersState
}
