import {
  DELETE_ARTICLE,
  INCREMENT,
  SET_DATE,
  SET_SELECTED_ARTICLES
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

export function setDate(dateObj) {
  return {
    type: SET_DATE,
    payload: { dateObj }
  }
}

export function setSelectedArticles(selectedArticles) {
  return {
    type: SET_SELECTED_ARTICLES,
    payload: { selectedArticles }
  }
}
