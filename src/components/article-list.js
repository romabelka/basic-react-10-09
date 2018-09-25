import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

import { restoreArticles } from '../ac'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  handleRestoreClick = () => this.props.restoreArticles()

  render() {
    return (
      <div>
        <ul>{this.body}</ul>
        <button onClick={this.handleRestoreClick}>restore articles</button>
      </div>
    )
  }

  get articles() {
    const { filters } = this.props

    let articles = this.props.articles.slice()

    if (filters.select && filters.select.length) {
      articles = articles.filter((article) =>
        filters.select.includes(article.id)
      )
    }

    if (filters.dateRange && filters.dateRange.from && filters.dateRange.to) {
      const dateFrom = Number(new Date(filters.dateRange.from))
      const dateTo = Number(new Date(filters.dateRange.to))

      articles = articles.filter((article) => {
        const articleDate = Number(article.date || 0)
        return articleDate >= dateFrom && articleDate <= dateTo
      })
    }

    return articles
  }

  get body() {
    const { toggleOpenItem, openItemId } = this.props
    return this.props.articles.map((article) => (
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

export default connect(
  (state) => {
    const { filters } = state

    let articles = state.articles.slice()

    if (filters.select && filters.select.length) {
      articles = articles.filter((article) =>
        filters.select.includes(article.id)
      )
    }

    if (filters.dateRange && filters.dateRange.from && filters.dateRange.to) {
      const dateFrom = Number(new Date(filters.dateRange.from))
      const dateTo = Number(new Date(filters.dateRange.to))

      articles = articles.filter((article) => {
        const articleDate = Number(article.date || 0)
        return articleDate >= dateFrom && articleDate <= dateTo
      })
    }

    return {
      articles: articles,
      filters: state.filters
    }
  },
  { restoreArticles }
)(ArticleListWithAccordion)
