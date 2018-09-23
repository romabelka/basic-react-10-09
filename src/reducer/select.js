import { SET_SELECTED_ARTICLES } from '../constants'

export default (selectedArticles = null, action) => {
  const { type, payload } = action

  switch (type) {
    case SET_SELECTED_ARTICLES:
      return payload.selectedArticles
  }

  return selectedArticles
}
