import { DELETE_ARTICLE, CHANGE_FILTERS, INCREMENT } from '../constants'

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

export function filterArticles(filter) {
  return {
    type: CHANGE_FILTERS,
    payload: filter
  }
}
