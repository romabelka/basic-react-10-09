import { LOAD_ALL_COMMENTS, START, SUCCESS } from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  commentsLength: 0,
  loading: false
})

export default (state = new ReducerRecord(), action) => {
  const { type, response } = action

  switch (type) {
    case LOAD_ALL_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_ALL_COMMENTS + SUCCESS:
      return state
        .setIn(['entities'], arrToMap(response.records, CommentRecord))
        .set('loading', false)
        .set('commentsLength', response.total)

    default:
      return state
  }
}
