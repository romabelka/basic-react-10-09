import { createSelector } from 'reselect'

export const articlesMapSelector = (state) => state.articles.entities
export const articlesLoadingSelector = (state) => state.articles.loading

export const commentsSelector = (state) => state.comments.entities
export const commentsTotalSelector = (state) => state.comments.totalPages
export const commentsPagesSelector = (state) => state.comments.pages

export const dateRangeSelector = (state) => state.filters.dateRange
export const selectedSelector = (state) => state.filters.selected

export const idSelector = (_, props) => props.id
export const pageSelector = (_, props) => props.page

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
    return comments.get(id)
  })

export const commentsPageLoadingSelector = createSelector(
  commentsPagesSelector,
  pageSelector,
  (pages, page) => pages.getIn([page, 'loading'])
)

export const commentsPageLoadedSelector = createSelector(
  commentsPagesSelector,
  pageSelector,
  (pages, page) => pages.getIn([page, 'loaded'])
)

export const commentsPageErrorSelector = createSelector(
  commentsPagesSelector,
  pageSelector,
  (pages, page) => pages.getIn([page, 'error'])
)

export const commentsPageSelector = createSelector(
  commentsPagesSelector,
  pageSelector,
  (pages, page) => {
    return pages.getIn([page, 'ids'])
  }
)
