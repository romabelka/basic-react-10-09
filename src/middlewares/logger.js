import { ADD_COMMENT } from '../constants'

export default (store) => (next) => (action) => {
  if (action.type === ADD_COMMENT) {
    action.id = Date.now().toString()
  }

  console.log('---', 'state before: ', store.getState())
  console.log('---', 'dispatching action', action)
  next(action)
  console.log('---', 'state after: ', store.getState())
}
