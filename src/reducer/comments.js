import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'
import { normalizedComments } from '../fixtures'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const CommentsRecord = Record({
  id: null,
  user: null,
  text: null
})

const ReducerRecord = Record({
  entities: arrToMap([], CommentsRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      console.log(state)
      return state.setIn(['entities', randomId], {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_COMMENTS + SUCCESS:
      return state
        .set('entities', arrToMap(response, CommentsRecord))
        .set('loading', false)
        .set('loaded', true)
    default:
      return state
  }
}
