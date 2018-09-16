import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Select from 'react-select'
import ArticleList from './components/article-list'
import ArticlesChart from './components/articles-chart'
import articles from './fixtures'
import UserForm from './components/user-form'
import DayPicker, { DateUtils } from 'react-day-picker'
import 'react-day-picker/lib/style.css'

class App extends Component {
  static defaultProps = {
    numberOfMonths: 2
  }

  state = {
    openItem: null,
    from: null,
    to: null
  }

  render() {
    const { from, to } = this.state
    const modifiers = { start: from, end: to }

    return (
      <div>
        <UserForm />
        <hr />
        <p>
          {!from && !to && 'Please select the first day.'}
          {from && !to && 'Please select the last day.'}
          {from &&
            to &&
            `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
          {from &&
            to && (
              <button className="link" onClick={this.handleResetClick}>
                Reset
              </button>
            )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.props.numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
        />
        <hr />
        <Select
          options={this.options}
          value={this.state.openItem}
          onChange={this.handleSelect}
        />
        <hr />
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

  handleSelect = (openItem) => this.setState({ openItem })

  handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, this.state)
    this.setState(range)
  }

  handleResetClick = () => {
    this.setState({
      from: null,
      to: null
    })
  }

  setArticleListRef = (ref) => {
    console.log('---', ref, findDOMNode(ref))
    /*
        setTimeout(() => {
            ref.toggleOpenItem(articles[0].id)
            ref.forceUpdate()
        }, 1000)
*/
  }
}

export default App
