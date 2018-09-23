import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import memoizeOne from 'memoize-one'
import _ from 'lodash'
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
    console.log('render')
    return <ul>{this.body}</ul>
  }

  get body() {
    const { toggleOpenItem, openItemId, articles } = this.props
    return articles.map((article) => (
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

const mapStateToProps = (state) => {
  const {
    filters: {
      selectedArticles,
      selectedRange: { to, from }
    },
    articles
  } = state

  const getFilteredArticles = memoizeOne(
    (articles, selectedArticles, from, to) => {
      function getDate(date, isFrom) {
        const time = isFrom ? [0, 0, 0] : [23, 59, 59]
        return new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          ...time
        )
      }

      return articles.filter((article) => {
        const articlePublishedDate = Date.parse(article.date)

        const isIncludedIntoSelect = !!selectedArticles.filter(
          (selectedArticle) => selectedArticle.value === article.id
        ).length

        return (
          (!selectedArticles.length || isIncludedIntoSelect) &&
          (!from ||
            !to ||
            (articlePublishedDate >= getDate(from, true) &&
              articlePublishedDate <= getDate(to, false)))
        )
      })
    },
    _.isEqual
  )

  return {
    articles: getFilteredArticles(articles, selectedArticles, from, to)
  }
}

export default connect(mapStateToProps)(ArticleListWithAccordion)
