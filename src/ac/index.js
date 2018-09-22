import {
  DELETE_ARTICLE,
  INCREMENT,
  FILTER_ARTICLES_BY_ID,
  FILTER_ARTICLES_BY_DATE
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

export function selectArticles(selected) {
  return {
    type: FILTER_ARTICLES_BY_ID,
    payload: { selected }
  }
}

export function changeDates(dateRange) {
  return {
    type: FILTER_ARTICLES_BY_DATE,
    payload: { dateRange }
  }
}
