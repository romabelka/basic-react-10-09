export default (store) => (next) => (action) => {
  if (!action.idHave) return next(action)
  next({
    ...action,
    idComment: (Date.now() + Math.random()).toString()
  })
}
