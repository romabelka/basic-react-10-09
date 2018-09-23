import { CHANGE_FILTERS } from '../constants'

const defaultFilters = {
  from: null,
  to: null,
  selected: []
}

export default (filtersState = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_FILTERS:
      return { ...filtersState, ...payload }
  }

  return filtersState
}
