let firstId = '1'
const genId = () => {
  firstId = '' + (+firstId + 1)
  return firstId
}

export default (store) => (next) => (action) => {
  action = { ...action, payload: { ...action.payload, newId: genId() } }
  next(action)
}
