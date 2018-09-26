import {
  INCREMENT,
  DELETE_ARTICLE,
  ADD_COMMENT_TO_ARTICLE,
  ADD_COMMENT,
  CHANGE_DATE_RANGE,
  CHANGE_SELECTION
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

export function addCommentToArticle(articleId, commentId) {
  console.log(articleId, commentId)
  return {
    type: ADD_COMMENT_TO_ARTICLE,
    payload: { articleId, commentId }
  }
}

export function addComment(id, user, text) {
  return {
    type: ADD_COMMENT,
    payload: { id, user, text }
  }
}

export function changeDateRange(dateRange) {
  return {
    type: CHANGE_DATE_RANGE,
    payload: { dateRange }
  }
}

export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTION,
    payload: { selected }
  }
}
