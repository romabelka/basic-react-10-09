import { FILTER_ARTICLES } from '../constants'

const defaultFilters = {
  selectedArticles: [],
  selectedDate: {
    from: null,
    to: null
  }
}

export default (filtersState = defaultFilters, action) => {
  const { type } = action

  switch (type) {
    // TODO - add filters logic
    case FILTER_ARTICLES:
      return filtersState

    default:
  }

  return filtersState
}
