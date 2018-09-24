import { DELETE_ARTICLE, INCREMENT, CHANGE_VALUE } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function changeValueSelectFilter(value) {
  console.log(value)

  return {
    type: CHANGE_VALUE,
    payload: value
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}
