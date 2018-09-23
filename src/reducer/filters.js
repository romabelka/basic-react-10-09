import { CHANGE_SELECTOR, CHANGE_DATERANGE } from '../constants'

const defFilter = {
  selected: null,
  range: {
    from: null,
    to: null
  }
}

export default (filterState = defFilter, action) => {
  const { type, payload } = action

  switch (type) {
    case CHANGE_SELECTOR:
      filterState.selected = payload.id
      break

    case CHANGE_DATERANGE:
      console.log('---', filterState.range, payload.range)
      filterState.range = payload.range
      break
  }

  return filterState
}
