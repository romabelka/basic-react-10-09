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

  filterByDate = (article) => {
    const { from, to } = this.props.filter
    if (!from || !to) return true

    const fromDate = new Date(from)
    const toDate = new Date(to)
    const date = new Date(article.date)

    return date > fromDate && date < toDate
  }

  filterBySelect = (article) => {
    const articleIdList = this.props.filter.selected.map(
      (article) => article.value
    )

    return !articleIdList.length ? true : articleIdList.includes(article.id)
  }

  get body() {
    const { toggleOpenItem, openItemId, articles } = this.props
    return articles
      .filter(this.filterBySelect)
      .filter(this.filterByDate)
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
  articles: state.articles.list,
  filter: state.articles.filter
}))(ArticleListWithAccordion)
