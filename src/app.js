import React, { Component } from 'react'
import ArticleList from './components/article-list'
import UserForm from './components/user-form'
import Filters from './components/filters'
import Counter from './components/counter'
import LikeCaunter from './components/LikeCaunter'

class App extends Component {
  render() {
    return (
      <div>
        <UserForm />
        <Counter />
        <Filters articles={[]} />
        <LikeCaunter />
        <ArticleList />
      </div>
    )
  }
}

export default App
