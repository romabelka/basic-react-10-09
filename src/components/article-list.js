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
    const { toggleOpenItem, openItemId, articles } = this.props
    return this.filterArticles(articles).map((article) => (
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

  filterArticles = (articles) => {
    return articles
      .filter(
        this.props.selectedArticles && this.props.selectedArticles.length
          ? this.filterBySelect
          : () => true
      )
      .filter(
        this.props.dateRange.from && this.props.dateRange.to
          ? this.filterByDate
          : () => true
      )
  }

  filterBySelect = (article) => {
    return this.props.selectedArticles.find(
      (selectedArticle) => selectedArticle.value === article.id
    )
  }

  filterByDate = (article) => {
    return (
      new Date(article.date) > new Date(this.props.dateRange.from) &&
      new Date(article.date) < new Date(this.props.dateRange.to)
    )
  }
}

const ArticleListWithAccordion = accordion(ArticleList)

export default connect((state) => ({
  articles: state.articles,
  dateRange: state.dateRange,
  selectedArticles: state.selectedArticles
}))(ArticleListWithAccordion)
