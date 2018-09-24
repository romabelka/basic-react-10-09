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

const mapStateToProps = (store) => {
  console.log(store.selectArticle)
  return {
    articles: store.articles.filter((el_1) => {
      return (
        store.selectArticle.selected.filter((el_2) => {
          return el_2.label == el_1.title
        }).length != 0
      )
    })
  }
}

const ArticleListWithAccordion = accordion(ArticleList)

export default connect(mapStateToProps)(ArticleListWithAccordion)
