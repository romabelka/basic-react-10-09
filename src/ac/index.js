import {
  DELETE_ARTICLE,
  INCREMENT,
  FILTER_ARTICLE_DAY,
  FILTER_ARTICLE_ID
} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function filterArticleDay(day) {
  return {
    type: FILTER_ARTICLE_DAY,
    payload: { day }
  }
}
export function filterArticleId(id) {
  return {
    type: FILTER_ARTICLE_ID,
    payload: { id }
  }
}
