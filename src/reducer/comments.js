import {
  ADD_COMMENT,
  COMMENTS_PAGE_LIMIT,
  LOAD_ARTICLE_COMMENTS,
  LOAD_COMMENTS_PAGE,
  SUCCESS,
  UPDATE_COMMENTS_PAGE
} from '../constants'
import { Record, OrderedMap } from 'immutable'

const CommentRecord = Record({
  id: null,
  text: null,
  user: null
})

const entities = []
entities.kvmap = new OrderedMap({})
const ReducerRecord = Record({
  entities,
  page: 1,
  total: null
})

function add(state, comments, page = undefined) {
  const kvmap = state.entities.kvmap
  let entities = state.entities.slice()
  entities.kvmap = kvmap
  const kvComments = []
  comments = comments.map((comment) => {
    const commentRecord = new CommentRecord(comment)
    kvComments.push([comment.id, new CommentRecord(comment)])
    return commentRecord
  })
  entities.kvmap = entities.kvmap.merge(new OrderedMap(kvComments))
  if (!page) {
    entities = entities.concat(comments)
    return state.set('entities', entities)
  }
  const start = (page - 1) * COMMENTS_PAGE_LIMIT
  const end = start + COMMENTS_PAGE_LIMIT
  if (end > entities.length) {
    entities.length = end
  }
  entities.splice.apply(entities, [start, comments.length].concat(comments))
  console.log(entities)
  return state.set('entities', entities)
}

export default (state = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case ADD_COMMENT:
      return add(state, [
        {
          ...payload.comment,
          id: randomId
        }
      ])
    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return add(state, response)

    case UPDATE_COMMENTS_PAGE:
      return state.set('page', payload.page)

    case LOAD_COMMENTS_PAGE + SUCCESS:
      return add(state, response.records, payload.page)
        .set('page', payload.page)
        .set('total', response.total)

    default:
      return state
  }
}
