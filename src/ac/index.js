import { DELETE_ARTICLE, INCREMENT, LIKE } from '../constants'

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

export function likePush() {
  return {
    type: LIKE
  }
}
