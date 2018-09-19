import React, { Component } from 'react'
import ArticleList from './components/articleList/'
import ArticlesChart from './components/articles-chart'
import articles from './fixtures'
import UserForm from './components/user-form'
import Filters from './components/filters'

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Filters articles={articles} />
        <ArticleList articles={articles} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }
}

export default App
