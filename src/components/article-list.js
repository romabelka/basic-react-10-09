import React, { Component } from 'react'

import Article from './article'
import accordion from '../decorators/accordion'

class ArticleList extends Component {
  memoize(func) {
    const cache = new Map()
    return function(...args) {
      const key = args[0]

      if (cache.has(key)) {
        return cache.get(key)
      }

      const result = func.apply(this, args)
      cache.set(key, result)
      return result
    }
  }

  get body() {
    const { openItemId, articles } = this.props
    return articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={this.toggleOpen(article.id)} //для мемоизации
        />
      </li>
    ))
  }

  toggleOpen = this.memoize((id) => this.props.toggleOpenItem(id))

  render() {
    return <ul>{this.body}</ul>
  }
}

const ArticleListWithAccordion = accordion(ArticleList)

export default ArticleListWithAccordion
