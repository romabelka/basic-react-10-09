import React, { Component } from 'react'
import ArticleList from './components/article-list'
import articles from './fixtures'
import DatePicker from './components/date-picker'

class App extends Component {
  render() {
    return (
      <div>
        <DatePicker />
        <ArticleList articles={articles} ref={this.setArticleListRef} />
      </div>
    )
  }
}

export default App
