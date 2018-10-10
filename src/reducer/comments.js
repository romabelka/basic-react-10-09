import {
  ADD_COMMENT,
  LOAD_ARTICLE_COMMENTS,
  LOAD_COMMENTS_PAGE,
  START,
  SUCCESS,
  FAIL
} from '../constants'
import { Record, OrderedMap, Map } from 'immutable'
import { arrToMap } from './utils'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const PageRecord = Record({
  ids: [],
  loading: null,
  loaded: null,
  error: null
})

const ReducerRecord = Record({
  entities: new OrderedMap({}),
  pages: Map(),
  totalPages: null
})

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response, error } = action

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

    case LOAD_COMMENTS_PAGE + START:
      return state
        .setIn(['pages', payload.page], new PageRecord())
        .setIn(['pages', payload.page, 'loading'], true)
        .setIn(['pages', payload.page, 'error'], null)

    case LOAD_COMMENTS_PAGE + SUCCESS:
      const comments = arrToMap(response.records, CommentRecord)
      const ids = [...comments.keys()]
      return state
        .mergeIn(['entities'], comments)
        .setIn(['pages', payload.page, 'ids'], ids)
        .set('totalPages', response.total)
        .setIn(['pages', payload.page, 'loading'], false)
        .setIn(['pages', payload.page, 'loaded'], true)

    case LOAD_COMMENTS_PAGE + FAIL:
      return state
        .setIn(['pages', payload.page, 'loading'], false)
        .setIn(['pages', payload.page, 'error'], error)

    default:
      return state
  }
}
