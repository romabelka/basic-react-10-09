import { DAYS, SELECT } from '../constants'

const defaultFilters = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (filters = defaultFilters, action) => {
  const { type, payload } = action
  switch (type) {
    case SELECT:
      return { ...filters, selected: payload.selected }

    case DAYS:
      return { ...filters, dateRange: payload.dateRange }

    default:
      return filters
  }
}
