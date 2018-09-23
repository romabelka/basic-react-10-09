import { SELECT_ARTICLE, RESET_FILTERS, DELETE_ARTICLE } from '../constants'

export default (selectState = [], action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT_ARTICLE:
      return [...payload.selectedArticles]

    case RESET_FILTERS:
      return []

    case DELETE_ARTICLE:
      return selectState.filter((article) => article.value !== payload.id)

    default:
      return selectState
  }
}
