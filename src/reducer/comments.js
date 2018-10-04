import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants'
import { arrToMap } from './utils'

export default (commentState = arrToMap([]), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return commentState.set(randomId, {
        ...payload.comment,
        id: randomId
      })

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return commentState.merge(arrToMap(response))

    default:
      return commentState
  }
}
