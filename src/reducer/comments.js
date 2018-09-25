import {} from '../constants'
import { normalizedComments } from '../fixtures'
import { ADD_COMMENT } from '../constants'

const defaultComments = normalizedComments.reduce(
  (acc, comment) => ({ ...acc, [comment.id]: comment }),
  {}
)

export default (commentsState = defaultComments, action) => {
  const { type, newComment, id } = action

  switch (type) {
    case ADD_COMMENT:
      return Object.assign({}, commentsState, {
        [id]: Object.assign({}, { id: id }, newComment)
      })

    default:
      return commentsState
  }
}
