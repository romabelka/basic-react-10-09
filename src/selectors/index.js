import { createSelector } from 'reselect'

export const articlesMapSelector = (state) => state.articles.entities
export const articlesLoadingSelector = (state) => state.articles.loading

export const commentsSelector = (state) => state.comments.entities
export const commentsLoadingSelector = (state) => state.comments.loading
export const commentsLoadedSelector = (state) => state.comments.loaded
export const commentsErrorSelector = (state) => state.comments.error

export const dateRangeSelector = (state) => state.filters.dateRange
export const selectedSelector = (state) => state.filters.selected

export const idSelector = (_, props) => props.id
export const idArticleSelector = (_, props) => props.article.id

export const articlesListSelector = createSelector(
  articlesMapSelector,
  (articlesMap) => articlesMap.valueSeq().toArray()
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
    console.log('---', comments, id)
    console.log('---', 'comment selector', id)
    return comments.get(id)
  })

export const commentLoadedSelector = createSelector(
  commentsLoadedSelector,
  idArticleSelector,
  (loadedToArticle, id) => !!loadedToArticle.get(id)
)
