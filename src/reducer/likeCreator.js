export default (likeState = 0, action) => {
  return action.type === 'LIKE' ? likeState + 1 : likeState
}
