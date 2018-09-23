import {
  DELETE_ARTICLE,
  INCREMENT,
  SELECT_ARTICLE,
  SET_DATE_RANGE
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

export function selectArticle(selectedArticlesList) {
  return {
    type: SELECT_ARTICLE,
    payload: { selectedArticlesList }
  }
}

export function setDateRange(dateRange) {
  return {
    type: SET_DATE_RANGE,
    payload: { dateRange }
  }
}
