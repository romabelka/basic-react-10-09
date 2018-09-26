import { ADD_COMMENT_TO_LIST, ADD_COMMENT_TO_ARTICLE } from '../constants'
function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return (
    s4() +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    '-' +
    s4() +
    s4() +
    s4()
  )
}
// generator works but does not have rerender for comments - maybe issue with reselect
export default (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT_TO_LIST) {
    const { user, text, articleId } = action.payload.data
    const comment = { user, text, id: guid() }

    next({
      type: ADD_COMMENT_TO_ARTICLE,
      payload: {
        articleId,
        commentId: comment.id
      }
    })

    next({
      type: ADD_COMMENT_TO_LIST,
      payload: {
        comment
      }
    })
  }
}
