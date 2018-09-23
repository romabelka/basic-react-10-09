import { DATE_RANGE } from '../constants'

const initialState = {
  from: null,
  to: null
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case DATE_RANGE:
      return { ...state, ...payload }
  }

  return state
}
