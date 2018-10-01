import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS, FAIL } from '../constants'
import { arrToMap } from './utils'
import { Record, Map } from 'immutable'

const CommentRecord = Record({
  user: null,
  id: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  loading: false,
  loaded: Map(),
  error: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response, error } = action

  switch (type) {
    case LOAD_COMMENTS + START:
      return state.set('loading', true).set('error', null)

    case LOAD_COMMENTS + SUCCESS:
      return state
        .mergeIn(['entities'], arrToMap(response, CommentRecord))
        .set('loading', false)
        .setIn(['loaded', payload.id], true)

    case LOAD_COMMENTS + FAIL:
      return state.set('loading', false).set('error', error)

    case ADD_COMMENT:
      return state.setIn(['entities', randomId], {
        ...payload.comment,
        id: randomId
      })

    default:
      return state
  }
}
