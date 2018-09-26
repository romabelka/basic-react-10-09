import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Article from './article'
import accordion from '../decorators/accordion'
import { filtratedArticles } from '../selectors'

export class ArticleList extends Component {
  static propTypes = {
    articles: PropTypes.object.isRequired,
    fetchData: PropTypes.func,

    //from accordion decorator
    openItemId: PropTypes.string,
    toggleItem: PropTypes.func
  }

  render() {
    console.log('---', 'rendering articles')
    return <ul>{this.body}</ul>
  }

  get body() {
    const { toggleOpenItem, openItemId, articles } = this.props
    console.log('Object.keys(articles)', Object.keys(articles))

    return Object.keys(articles).map((id) => (
      <li key={id} className="test__article-list--item">
        <Article
          idSelector={id}
          isOpen={openItemId === id}
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

export default connect((state) => {
  console.log('---', 'articles connect')
  return {
    articles: filtratedArticles(state)
  }
})(accordion(ArticleList))
