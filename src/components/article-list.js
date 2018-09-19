import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Index from './article'
import accordion from '../decorators/accordion'

export class ArticleList extends Component {
  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const { toggleOpenItem, openItemId, articles } = this.props
    return articles.map((article) => (
      <li key={article.id} className="test__article-list--item">
        <Index
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

ArticleList.propTypes = {
  toggleOpenItem: PropTypes.func.isRequired,
  fetchData: PropTypes.func,
  openItemId: PropTypes.string,
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  ).isRequired
}

const ArticleListWithAccordion = accordion(ArticleList)

export default ArticleListWithAccordion
