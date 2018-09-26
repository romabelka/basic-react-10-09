import { ADD_COMMENT } from '../constants'
import reduceDataIntoObject from '../utils/reduce-data'
import { normalizedComments } from '../fixtures'

const defaultComments = reduceDataIntoObject(normalizedComments)

export default (commentsState = defaultComments, action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT:
      return {
        ...commentsState,
        [payload.generatedId]: {
          id: payload.generatedId,
          user: payload.user,
          text: payload.text
        }
      }
    default:
      return commentsState
  }
}
