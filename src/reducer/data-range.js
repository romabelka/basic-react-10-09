import { RESET_FILTERS, SELECT_RANGE } from '../constants'

const initialRangeState = {
  from: null,
  to: null
}

export default (rangeState = initialRangeState, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_RANGE:
      return { ...payload.selectedRange }

    case RESET_FILTERS:
      return { ...initialRangeState }

    default:
      return rangeState
  }
}
