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
    const { toggleOpenItem, openItemId, articles, filter } = this.props
    const filtered = articles
      .filter((article) => {
        if (filter.selectId.findIndex((x) => x.value === article.id) !== -1) {
          return true
        }
      })
      .filter((article) => {
        if (filter.dateRange.from && filter.dateRange.to) {
          if (
            new Date(article.date) >= filter.dateRange.from &&
            new Date(article.date) <= filter.dateRange.to
          ) {
            return true
          }
        } else {
          return true
        }
      })
    return filtered.map((article) => (
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
  filter: state.filter
}))(ArticleListWithAccordion)
