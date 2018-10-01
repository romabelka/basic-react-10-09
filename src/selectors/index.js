import { createSelector } from 'reselect'

const selectArticles = (state) => state.articles
const dataRangeSelector = (state) => state.filters.dateRange
const selectSelector = (state) => state.filters.selected

export const filtratedArticles = createSelector(
  selectArticles,
  dataRangeSelector,
  selectSelector,
  (articles, dateRange, selected) => {
    const { from, to } = dateRange
    console.log('create selector')
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
