export default (store) => (next) => (action) => {
  const { payload } = action
  if (!payload) return next(action)

  const { generatedId, ...rest } = payload
  if (generatedId !== '') return next(action)

  next({
    ...action,
    payload: {
      generatedId: Math.random()
        .toString(36)
        .substr(2, 10),
      ...rest
    }
  })
}
