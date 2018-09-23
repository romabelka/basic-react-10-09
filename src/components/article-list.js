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
    const { toggleOpenItem, openItemId, selected, range } = this.props
    let { from, to } = range
    let { articles } = this.props
    if (selected) {
      articles = articles.filter((article) => {
        return selected.find((selItem) => selItem.label === article.title)
      })
    }
    if (from && to) {
      from = +new Date(from)
      to = +new Date(to) + 1000 * 60 * 60 * 24
      articles = articles.filter((article) => {
        const date = +new Date(article.date)
        return date > from && date < to
      })
    }
    return articles.map((article) => (
      <li key={article.id} className="test__article-list--item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
        Date: {article.date}
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
  selected: state.filter.selected,
  range: state.filter.range
}))(ArticleListWithAccordion)
