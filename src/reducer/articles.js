import {DELETE_ARTICLE, FILTER_ARTICLE} from '../constants'
import defaultArticles from '../fixtures'

const wrap = (article) => {return {article: article, visible: true}};

export default (articlesState = defaultArticles.map(wrap), action) => {
  const { type, payload, range } = action

  switch (type) {
      case DELETE_ARTICLE:
      return articlesState.filter((wrapper) => wrapper.article.id !== payload.id)
    case FILTER_ARTICLE:
      return articlesState.map((wrapper) => {
          const date = new Date(wrapper.article.date)
          const visible = date >= range.from && date <= range.to
          return {
              article: wrapper.article,
              visible: visible
          }
      })
  }

  return articlesState
}
