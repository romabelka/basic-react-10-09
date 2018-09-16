import React, { Component } from 'react'
import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  render() {
    return <ul>{this.body}</ul>
  }

  get body() {
    const { toggleOpenItem, openItemId, articles } = this.props
    return articles.map((article, comments) => (
      <li key={article.id}>
        <Article
          article={article}
          comments={article.comments}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))
  }
}

const ArticleListWithAccordion = accordion(ArticleList)

export default ArticleListWithAccordion
