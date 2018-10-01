import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const CommentsReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  loading: true
})

export default (state = new CommentsReducerRecord(), action) => {
  const { type, payload, randomId, response } = action
  switch (type) {
    case ADD_COMMENT:
      return state.setIn(randomId, {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_COMMENTS + SUCCESS:
      return state
        .set('entities', arrToMap(response, CommentRecord))
        .set('loading', false)

    default:
      return state
  }
}
