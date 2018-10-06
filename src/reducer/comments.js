import { ADD_COMMENT, LOAD_COMMENTS, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import { OrderedMap, Record } from 'immutable'

const CommentRecord = Record({
  id: null,
  user: null,
  text: null
})

const reducerRecord = new OrderedMap({
  entities: arrToMap([], CommentRecord)
})

export default (state = reducerRecord, action) => {
  const { type, payload, randomId } = action

  switch (type) {
    case ADD_COMMENT:
      return state.setIn(randomId, {
        ...payload.comment,
        id: randomId
      })

    case LOAD_COMMENTS + SUCCESS:
      return state.mergeIn(
        ['entities'],
        arrToMap(action.response, CommentRecord)
      )

    default:
      return state
  }
}
