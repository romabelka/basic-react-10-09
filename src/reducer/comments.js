import {
  ADD_COMMENT,
  LOAD_ALL_COMMENTS,
  LOAD_ARTICLE_COMMENTS,
  START,
  SUCCESS,
  FAIL
} from '../constants'
import { Record, OrderedMap } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  loading: false,
  loaded: false,
  error: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(
        ['entities', randomId],
        new CommentRecord({
          ...payload.comment,
          id: randomId
        })
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return state.mergeIn(['entities'], arrToMap(response, CommentRecord))

    case LOAD_ALL_COMMENTS + START:
      return state.set('loading', true)

    case LOAD_ALL_COMMENTS + SUCCESS:
      return state
        .mergeIn(['entities'], arrToMap(response.records, CommentRecord))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ALL_COMMENTS + FAIL:
      return state.set('loading', false).set('error', true)

    default:
      return state
  }
}
