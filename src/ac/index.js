import { DELETE_ARTICLE, INCREMENT, FILTER, RANGE } from '../constants'

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

export function filterArticles(selected) {
  return {
    type: FILTER,
    payload: selected
  }
}

export function filterArticlesByRange(date) {
  return {
    type: RANGE,
    payload: date
  }
}
