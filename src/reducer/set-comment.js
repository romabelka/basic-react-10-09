import { SET_COMMENT } from '../constants'

export default (state, action) => {
  switch (action.type) {
    case SET_COMMENT:
      return { ...state, newComment: action.payload }

    default:
      return state
  }
}
