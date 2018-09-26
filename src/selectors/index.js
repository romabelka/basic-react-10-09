import { createSelector } from 'reselect'

export const articlesSelector = (state) => state.articles
export const commentsSelector = (state) => state.comments
export const dateRangeSelector = (state) => state.filters.dateRange
export const selectedSelector = (state) => state.filters.selected

export const idSelector = (_, props) => props.id

export const filtratedArticles = createSelector(
  articlesSelector,
  selectedSelector,
  dateRangeSelector,
  (articles, selected, dateRange) => {
    const { from, to } = dateRange

    const filtredArticlesList = Object.keys(articles).filter((id) => {
      const published = Date.parse(articles[id].date)
      return (
        (!selected.length ||
          selected.find((selected) => selected.value === id)) &&
        (!from || !to || (published > from && published < to))
      )
    })

    return filtredArticlesList.reduce(
      (acc, id) => ({ ...acc, [id]: articles[id] }),
      {}
    )
  }
)

export const createCommentSelector = () =>
  createSelector(commentsSelector, idSelector, (comments, id) => {
    console.log('---', 'comment selector', id)
    return comments[id]
  })

export const createArticleSelector = () =>
  createSelector(articlesSelector, idSelector, (articles, id) => {
    console.log('---', 'article selector', id)
    return articles[id]
  })
