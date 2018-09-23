import {
  CHANGE_SELECTOR,
  CHANGE_DATERANGE,
  DELETE_ARTICLE,
  INCREMENT
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

export function setDaterangeFilter(range) {
  console.log('setDaterangeFilter', range)

  return {
    type: CHANGE_DATERANGE,
    payload: { range }
  }
}

export function setSelectorFilter(id) {
  return {
    type: CHANGE_SELECTOR,
    payload: { id }
  }
}
