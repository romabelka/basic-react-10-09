import { ADD_COMMENT } from '../constants'
import { addCommentToArticle } from '../ac'

function dec2hex(dec) {
  return ('0' + dec.toString(16)).substr(-2)
}

function generateId(len) {
  var arr = new Uint8Array(len / 2)
  window.crypto.getRandomValues(arr)
  return Array.from(arr, dec2hex).join('')
}

export default (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    let id

    do {
      id = generateId(10)
    } while (Object.keys(store.getState().comments).includes(id))

    next({
      ...action,
      payload: { ...action.payload, commentId: id }
    })
    next(addCommentToArticle(action.payload.articleId, id))
  } else {
    next(action)
  }
}
