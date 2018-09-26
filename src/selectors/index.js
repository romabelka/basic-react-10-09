import { createSelector } from 'reselect'

export const articlesSelectorToObject = (state) => state.articles
export const commentsSelector = (state) => state.comments
export const dateRangeSelector = (state) => state.filters.dateRange
export const selectedSelector = (state) => state.filters.selected

export const idSelector = (_, props) => props.id

export const articlesSelector = createSelector(
  articlesSelectorToObject,
  (articles) => Object.keys(articles).map((article) => articles[article])
)

export const filtratedArticles = createSelector(
  articlesSelector,
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
    return comments[id]
  })

export const createArticleSelector = () =>
  createSelector(articlesSelectorToObject, idSelector, (articles, id) => {
    return articles[id]
  })
