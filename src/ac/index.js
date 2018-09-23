import {
  DELETE_ARTICLE,
  INCREMENT,
  DATE_RANGE,
  SELECT_ARTICLE
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

export function filterByDate(daterange) {
  return {
    type: DATE_RANGE,
    payload: daterange
  }
}

export function selectArticle(id) {
  return {
    type: SELECT_ARTICLE,
    payload: id
  }
}
