export default (store) => (next) => (action) => {
  console.log('---', 'state before: ', store.getState())
  const newId = Math.random()
    .toString(36)
    .substring(2)

  action.payload.id = newId
  next(action)
  console.log('---', 'state after: ', store.getState())
}
