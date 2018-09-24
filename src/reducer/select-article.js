import { SELECT_ARTICLE } from '../constants'

const initialState = {
  selected: []
}

export default (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_ARTICLE:
      return { ...state, ...payload }
  }

  return state
}
