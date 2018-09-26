export default (store) => (next) => (action) => {
  const { type, payload } = action
  let uniqueCommentId
  if (type === 'ADD_COMMENT') {
    payload.commentId = Date.now()
  }
  next(action, payload)
}
