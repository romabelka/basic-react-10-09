import { ADD_COMMENT } from '../constants'
import shortid from 'shortid'

import { addCommentIdToArticle } from '../ac'

export default (store) => (next) => (action) => {
  const { type, payload } = action

  switch (type) {
    case ADD_COMMENT: {
      const [commentId, articleId] = [shortid.generate(), payload.articleId]

      store.dispatch(addCommentIdToArticle({ commentId, articleId }))

      next({
        type,
        payload: {
          ...payload.comment,
          id: commentId
        }
      })

      break
    }

    default:
      next(action)
  }

  // console.log('---', 'state after: ', store.getState())
}
