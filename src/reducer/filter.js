import { FILTER_ARTICLE_DAY, FILTER_ARTICLE_ID } from '../constants'

import defaultArticles from '../fixtures'

export default (filter = '', action) => {
  const { type, payload } = action

  switch (type) {
    case FILTER_ARTICLE_DAY:
      return payload.day
        ? (filter =
            filter + ' from: ' + payload.day.from + 'to: ' + payload.day.to)
        : ''
    case FILTER_ARTICLE_ID:
      return payload.id ? (filter = filter + ' id: ' + payload.id) : ''
  }

  return filter
}
