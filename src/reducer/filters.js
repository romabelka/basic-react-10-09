import { SELECT_ARTICLE, SET_DATE_RANGE } from '../constants'

const defaultState = {
  selectedArticlesList: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (filtersState = defaultState, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_ARTICLE:
      return {
        ...filtersState,
        selectedArticlesList: payload.selectedArticlesList
      }

    case SET_DATE_RANGE:
      return {
        ...filtersState,
        dateRange: payload.dateRange
      }

    default:
      return filtersState
  }
}
