import React, { Component } from 'react'
import ArticleList from '../article-list'
import { Route } from 'react-router-dom'
import Article from '../article'
import { Consumer as LanguageConsumer } from '../../contexts/glossary'

class ArticlesPage extends Component {
  static propTypes = {}

  render() {
    console.log('---', 'articles list match:', this.props.match)
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" children={this.getArticle} exact />
      </div>
    )
  }

  getArticle = ({ match }) => {
    console.log('---', 'article match: ', match)
    if (!match)
      return (
        <LanguageConsumer>
          {(glossary) => <h1>{glossary.selectArticle}</h1>}
        </LanguageConsumer>
      )

    return <Article id={match.params.id} isOpen key={match.params.id} />
  }
}

export default ArticlesPage
