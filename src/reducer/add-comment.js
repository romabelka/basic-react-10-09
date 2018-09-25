import { ADD_COMMENT } from '../constants'

const defaultText = {
  addComment: {
    authorName: '1',
    commentText: '2'
  }
}

export default (state = defaultText, action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_COMMENT:
      return { ...state, addComment: payload.addComment }

    default:
      return state
  }
}
