import {
  DELETE_ARTICLE,
  INCREMENT,
  SELECT_ARTICLE,
  SELECT_RANGE,
  RESET_FILTERS,
  APPLY_FILTERS
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

export function selectArticle(selectedArticles) {
  return {
    type: SELECT_ARTICLE,
    payload: { selectedArticles }
  }
}

export function selectRange(selectedRange) {
  return {
    type: SELECT_RANGE,
    payload: { selectedRange }
  }
}

export function applyFilters(selectedArticles, selectedRange) {
  return {
    type: APPLY_FILTERS,
    payload: { selectedArticles, selectedRange }
  }
}

export function resetFilters() {
  return {
    type: RESET_FILTERS
  }
}
