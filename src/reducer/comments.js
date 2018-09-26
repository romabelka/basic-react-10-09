import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({ ...acc, [comment.id]: comment }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action
  console.log(payload)
  switch (type) {
    case ADD_COMMENT:
      return {
        ...commentsState,
        [payload.commentId]: {
          id: payload.commentId.toString(),
          user: payload.authorName,
          text: payload.commentText
        }
      }

    default:
      return commentsState
  }
}
