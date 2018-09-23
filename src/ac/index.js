import { DELETE_ARTICLE, FILTER_ARTICLE, INCREMENT, SET_RANGE } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function setRange(day) {
  return {
    type: SET_RANGE,
    day: day
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function filterArticle(from, to) {
  return {
    type: FILTER_ARTICLE,
    range: { from, to }
  }
}
