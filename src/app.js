import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import ArticleList from './components/article-list'
import ArticlesChart from './components/articles-chart'
import articles from './fixtures'
import UserForm from './components/user-form'

import DayPicker from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
  state = {
    openItem: null,
    dateFrom: null,
    dateTo: null
  }

  componentDidMount() {
    this.setState({
      dateFrom: new Date(
        Math.min.apply(Math, articles.map((art) => new Date(art.date) - 0))
      ),
      dateTo: new Date()
    })
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center', padding: 20 }}>
          <DayPicker
            selectedDays={this.state.dateFrom}
            onDayClick={this.handleDayClick.bind(this, 'dateFrom')}
          />
          <DayPicker
            selectedDays={this.state.dateTo}
            onDayClick={this.handleDayClick.bind(this, 'dateTo')}
          />

          <span
            style={{
              display: 'block',
              padding: '10px',
              textAlign: 'center',
              fontSize: '18px'
            }}
          >
            {this.state.dateFrom && this.state.dateTo
              ? `${this.state.dateFrom.toLocaleDateString()} - ${this.state.dateTo.toLocaleDateString()}`
              : 'Please select date range'}
          </span>
        </div>

        <UserForm />
        <Select
          options={this.options}
          value={this.state.openItem}
          onChange={this.handleSelect}
        />
        <ArticleList articles={articles} ref={this.setArticleListRef} />
        <ArticlesChart articles={articles} />
      </div>
    )
  }

  get options() {
    return articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  handleDayClick(key, day) {
    if (this.state.hasOwnProperty(key)) {
      this.setState({
        [key]: day
      })
    }
  }

  handleSelect = (openItem) => this.setState({ openItem })

  setArticleListRef = (ref) => {
    // console.log('---', ref, findDOMNode(ref))
    /*
				setTimeout(() => {
						ref.toggleOpenItem(articles[0].id)
						ref.forceUpdate()
				}, 1000)
*/
  }
}

export default App
