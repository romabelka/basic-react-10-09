import { ADD_COMMENT } from '../constants'
import { normalizedComments } from '../fixtures'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({ ...acc, [comment.id]: comment }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type } = action

  switch (type) {
    case ADD_COMMENT:
      console.log('====(reducer) ADD_COMMENT', action.payload)
      const id = action.payload.newId
      const { user, text } = action.payload
      return { ...commentsState, [id]: { id, user, text } }

    default:
      return commentsState
  }
}
