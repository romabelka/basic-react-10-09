import { DELETE_ARTICLE, INCREMENT, FILTER_ARTICLES } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE_ARTICLE,
    payload: { id }
  }
}

export function filterArticles(filterData, filterType, articles) {
  return {
    type: FILTER_ARTICLES,
    payload: {
      filterData,
      filterType,
      articles
    }
  }
}
