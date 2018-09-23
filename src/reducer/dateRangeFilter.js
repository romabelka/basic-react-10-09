import { CHANGE_DATE_FILTER } from '../constants'

export default (dateRangeState = { from: null, to: null }, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_DATE_FILTER:
      return payload
  }

  return dateRangeState
}
