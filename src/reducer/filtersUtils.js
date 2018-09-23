import { FILTER_BY_DATE, FILTER_BY_NAME } from '../constants'

// here can be added another filters
export const getFilterData = (filtersState, payload) => {
  switch (payload.filterType) {
    case FILTER_BY_DATE:
      return {
        ...filtersState,
        selectedDate: {
          from: payload.filterData.from,
          to: payload.filterData.to
        }
      }

    case FILTER_BY_NAME:
      return {
        ...filtersState,
        selectedArticles: payload.filterData.selected
      }

    default:
      return filtersState
  }
}
