import {
  DELETE_ARTICLE,
  INCREMENT,
  SET_SELECT_FILTER,
  SET_DATE_FILTER
} from '../constants'
import { DateUtils } from 'react-day-picker'

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

export function setSelectFilter(array) {
  return {
    type: SET_SELECT_FILTER,
    payload: array
  }
}
export function setDateFilter(daterange) {
  return {
    type: SET_DATE_FILTER,
    payload: daterange
  }
}
