import {
  DELETE_ARTICLE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  START,
  SUCCESS,
  FAIL,
  LOAD_ARTICLE,
  LOAD_ARTICLE_COMMENTS
} from '../constants'
import { arrToMap } from './utils'
import { Record } from 'immutable'

const ArticleRecord = Record({
  title: null,
  id: null,
  text: null,
  date: null,
  loading: false,
  comments: [],
  loadingComments: false,
  loadedComments: false,
  errorComments: null
})

const ReducerRecord = Record({
  entities: arrToMap([], ArticleRecord),
  loading: false,
  loaded: false,
  error: null
})

export default (articlesState = new ReducerRecord(), action) => {
  const { type, payload, randomId, response } = action

  switch (type) {
    case DELETE_ARTICLE:
      return articlesState.deleteIn(['entities', payload.id])

    case ADD_COMMENT:
      return articlesState.updateIn(
        ['entities', payload.articleId, 'comments'],
        (comments) => comments.concat(randomId)
      )

    case LOAD_ALL_ARTICLES + START:
      return articlesState.set('loading', true)

    case LOAD_ALL_ARTICLES + SUCCESS:
      return articlesState
        .set('entities', arrToMap(response, ArticleRecord))
        .set('loading', false)
        .set('loaded', true)

    case LOAD_ARTICLE + START:
      return articlesState.setIn(['entities', payload.id, 'loading'], true)

    case LOAD_ARTICLE + SUCCESS:
      return articlesState.setIn(
        ['entities', payload.id],
        new ArticleRecord(response)
      )

    case LOAD_ARTICLE_COMMENTS + START:
      return articlesState.setIn(
        ['entities', payload.id, 'loadingComments'],
        true
      )

    case LOAD_ARTICLE_COMMENTS + SUCCESS:
      return articlesState
        .setIn(['entities', payload.id, 'loadingComments'], false)
        .setIn(['entities', payload.id, 'loadedComments'], true)

    case LOAD_ARTICLE_COMMENTS + FAIL:
      return articlesState
        .setIn(['entities', payload.id, 'loadingComments'], false)
        .setIn(['entities', payload.id, 'errorComments'], true)

    default:
      return articlesState
  }
}
