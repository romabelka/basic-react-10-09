import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentRecord),
  loading: false
  /*loaded: false*/
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId } = action

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
        .set('loading', false)
        .set('entities', arrToMap(action.response, CommentRecord))

    default:
      return state
  }
}
