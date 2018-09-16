import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const { articles, openItemId, toggleOpen } = this.props

    return articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          toggleOpen={toggleOpen}
          isOpen={openItemId === article.id}
        />
      </li>
    ))
  }
}

const ArticleListWithAccordion = accordion(ArticleList)

export default ArticleListWithAccordion
