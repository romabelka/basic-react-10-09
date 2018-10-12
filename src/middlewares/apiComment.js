export default (store) => (next) => (action) => {
  const { callApiComment } = action

  if (!callApiComment) return next(action)

  fetch(callApiComment)
    .then((res) => res.json())
    .then((response) => next({ ...action, response }))
}
