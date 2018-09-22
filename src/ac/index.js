import { DELETE_ARTICLE, FILTER_ARTICLE, INCREMENT } from '../constants'

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

export function filterArticle(day) {
  return {
    type: FILTER_ARTICLE,
    day: { day }
  }
}
