import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({ ...acc, [comment.id]: comment }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT:
      return {
        ...commentsState,
        [payload.commentId]: {
          id: payload.commentId,
          user: payload.user,
          text: payload.text
        }
      }

    default:
      return commentsState
  }
}
