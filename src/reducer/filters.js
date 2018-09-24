import { CHANGE_VALUE } from '../constants'

const initialState = {
  dataFilter: null,
  selectFilter: []
}

export default function reduce(filterState = initialState, action) {
  switch (action.type) {
    case CHANGE_VALUE:
      return {
        ...filterState,
        selectFilter: action.payload
      }

    default:
      return filterState
  }
}
