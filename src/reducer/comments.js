import { ADD_COMMENT_TO_LIST } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({ ...acc, [comment.id]: comment }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT_TO_LIST:
      const cloneCommentsState = { ...commentsState }
      const { comment } = payload

      cloneCommentsState[comment.id] = comment

      return cloneCommentsState
    default:
      return commentsState
  }
}
