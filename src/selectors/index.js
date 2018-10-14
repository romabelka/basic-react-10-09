import { createSelector } from 'reselect'
import { COMMENTS_PAGE_LIMIT } from '../constants'

export const articlesMapSelector = (state) => state.articles.entities
export const articlesLoadingSelector = (state) => state.articles.loading

export const commentsTotalSelector = (state) => state.comments.total
export const commentsPageSelector = (state) => state.comments.page
export const commentsEntitiesSelector = (state) => state.comments.entities
export const commentsSelector = (state) => {
  const page = commentsPageSelector(state)
  const entities = commentsEntitiesSelector(state)
  if (!page) return entities
  const limit = COMMENTS_PAGE_LIMIT
  const offset = (page - 1) * limit
  const res = entities.slice(offset, offset + limit)
  return res.filter((val) => typeof val !== 'undefined')
}

export const dateRangeSelector = (state) => state.filters.dateRange
export const selectedSelector = (state) => state.filters.selected

export const idSelector = (_, props) => props.id
export const articlesListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
)

export const articleSelector = createSelector(
  articlesMapSelector,
  idSelector,
  (articles, id) => articles.get(id)
)

export const filtratedArticles = createSelector(
  articlesListSelector,
  selectedSelector,
  dateRangeSelector,
  (articles, selected, dateRange) => {
    const { from, to } = dateRange

    console.log('---', 'article list selector')

    return articles.filter((article) => {
      const published = Date.parse(article.date)
      return (
        (!selected.length ||
          selected.find((selected) => selected.value === article.id)) &&
        (!from || !to || (published > from && published < to))
      )
    })
  }
)

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('---', 'comment selector', id)
    return comments.kvmap.get(id)
  })
