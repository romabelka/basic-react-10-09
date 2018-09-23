import { SET_SELECT_FILTER, SET_DATE_FILTER } from '../constants'
export default (
  filterState = { selectId: [], dateRange: { from: null, to: null } },
  action
) => {
  const { type, payload } = action
  switch (type) {
    case SET_DATE_FILTER:
      return { ...filterState, dateRange: payload }
    case SET_SELECT_FILTER:
      return { ...filterState, selectId: payload }
  }
  return filterState
}
