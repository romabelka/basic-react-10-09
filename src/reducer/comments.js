import { ADD_COMMENT, LOAD_COMMENTS } from '../constants'
//import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'
import { Record, OrderedMap } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReduserCommentRecord = Record({
  entities: arrToMap([], CommentRecord),
  loading: false
})

export default (commentState = new ReduserCommentRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return commentState.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )
    case LOAD_COMMENTS:
      return commentState.mergeIn(
        ['entities'],
        arrToMap(response, CommentRecord)
      )

    default:
      return commentState
  }
}
