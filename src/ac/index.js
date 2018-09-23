import {
  DELETE_ARTICLE,
  INCREMENT,
  CHANGE_SELECT_FILTER,
  CHANGE_DATE_FILTER
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

export function changeSelectFilter(selected) {
  return {
    type: CHANGE_SELECT_FILTER,
    payload: { selected }
  }
}

export function changeDateRangeFilter(dateRange) {
  return {
    type: CHANGE_DATE_FILTER,
    payload: { from: dateRange.from, to: dateRange.to }
  }
}
