import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({ ...acc, [comment.id]: comment }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, playload } = action

  switch (type) {
    case ADD_COMMENT:
      return { ...commentsState, action }
    default:
      return commentsState
  }
}
