import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    fetchData: PropTypes.func,
    // filterBySelectedID: PropTypes.number,
    // filterByDate: PropTypes.array.number,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const {
      toggleOpenItem,
      openItemId,
      articles,
      filterBySelected,
      filterByDateRange
    } = this.props

    let articleList =
      filterBySelected && filterBySelected.length !== 0
        ? articles.filter((article) => {
            for (let i = 0; i < filterBySelected.length; i++) {
              if (filterBySelected[i].value === article.id) {
                return true
              }
            }
            return false
          })
        : articles

    articleList =
      filterByDateRange.to || filterByDateRange.from
        ? articleList.filter((article) => {
            const creationDate = new Date(article.date)
            return (
              creationDate > filterByDateRange.from &&
              creationDate < filterByDateRange.to
            )
          })
        : articleList

    return articleList.map((article) => (
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
  filterBySelected: state.selectFilter,
  filterByDateRange: state.dateRangeFilter
}))(ArticleListWithAccordion)
