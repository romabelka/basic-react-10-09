import {
  DELETE_ARTICLE,
  RESTORE_ARTICLES,
  INCREMENT,
  SET_FILTERS
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

export function restoreArticles() {
  return {
    type: RESTORE_ARTICLES
  }
}

export function setFilters(filters) {
  return {
    type: SET_FILTERS,
    payload: filters
  }
}
