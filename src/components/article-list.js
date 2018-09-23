import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const { toggleOpenItem, openItemId, articles, filters } = this.props
    return articles
      .filter((article) => {
        const { selectedArticlesList, dateRange } = filters
        const selectedArticlesId = selectedArticlesList.map(
          (selectedArticle) => selectedArticle.value
        )
        const hasSelected =
          ~selectedArticlesId.indexOf(article.id) ||
          selectedArticlesList.length === 0

        const atricleDate = new Date(article.date)
        const dateRangeFrom = new Date(dateRange.from)
        const dateRangeTo = new Date(dateRange.to)
        const isAfterDateFrom = atricleDate - dateRangeFrom >= 0
        const isBeforeDateTo = dateRangeTo - atricleDate >= 0
        const hasDateRange = isAfterDateFrom && isBeforeDateTo

        let inDateRange = true

        if (dateRange.from && !dateRange.to) inDateRange = isAfterDateFrom
        if (!dateRange.from && dateRange.to) inDateRange = isBeforeDateTo
        if (dateRange.from && dateRange.to) inDateRange = hasDateRange

        return hasSelected && inDateRange
      })
      .map((article) => (
        <li key={article.id} className="test__article-list--item">
          <Article
            article={article}
            isOpen={openItemId === article.id}
            toggleOpen={toggleOpenItem}
          />
        </li>
      ))
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

const ArticleListWithAccordion = accordion(ArticleList)

export default connect((state) => ({
  articles: state.articles,
  filters: state.filters
}))(ArticleListWithAccordion)
