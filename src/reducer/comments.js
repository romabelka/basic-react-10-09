import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (state = ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.set(randomId, {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_COMMENTS + SUCCESS:
      return state
        .set('entities', arrToMap(response, CommentRecord))
        .set('loading', false)
        .set('loaded', true)
    default:
      return state
  }
}
