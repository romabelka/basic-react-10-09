import { SET_FILTERS } from '../constants'

export default (filtersState = {}, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_FILTERS:
      return payload
    default:
      return filtersState
  }
}
