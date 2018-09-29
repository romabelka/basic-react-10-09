import { DELETE_ARTICLE, INCREMENT, LIKE, SELECT, DAYS } from '../constants'

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

export function selectArticles(selected) {
  return {
    type: SELECT,
    payload: { selected }
  }
}

export function selectDay(dateRange) {
  return {
    type: DAYS,
    payload: { dateRange }
  }
}
