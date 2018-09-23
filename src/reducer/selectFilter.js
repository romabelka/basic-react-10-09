import { CHANGE_SELECT_FILTER } from '../constants'

export default (selectFilterState = null, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_SELECT_FILTER:
      return payload.selected
  }

  return selectFilterState
}
