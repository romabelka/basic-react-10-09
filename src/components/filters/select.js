import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import connect from 'react-redux/es/connect/connect'
import { setFilters } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = (selected) => {
    this.props.setFilters({
      ...this.props.filters,
      select: selected.map((option) => option.value)
    })
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  get selected() {
    const { filters, articles } = this.props

    return filters.select
      ? filters.select.reduce((selection, id) => {
          const article = articles.find((article) => article.id === id)

          if (article)
            selection.push({
              label: article.title,
              value: article.id
            })

          return selection
        }, [])
      : []
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles,
    filters: state.filters
  }),
  { setFilters }
)(SelectFilter)
