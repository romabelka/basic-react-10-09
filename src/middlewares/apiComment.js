export default (store) => (next) => (action) => {
  const { callApiComment } = action

  fetch(callApiComment)
    .then((res) => res.json())
    .then((response) => next(...action, response))
}
