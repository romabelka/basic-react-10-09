import { FILTER_ARTICLES_BY_ID, FILTER_ARTICLES_BY_DATE } from '../constants'

const defaultFiltered = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (filtered = defaultFiltered, action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_ARTICLES_BY_ID:
      return { ...filtered, selected: payload.selected }

    case FILTER_ARTICLES_BY_DATE:
      return { ...filtered, dateRange: payload.dateRange }
  }

  return filtered
}
