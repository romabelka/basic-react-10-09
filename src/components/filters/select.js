import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { filterArticles } from '../../ac'
import { FILTER_BY_NAME } from '../../constants'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = (selected) =>
    this.props.filterArticles({ selected }, FILTER_BY_NAME)

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    return (
      <Select
        options={this.options}
        value={this.props.selectedArticles}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles,
    selectedArticles: state.filters.selectedArticles
  }),
  { filterArticles }
)(SelectFilter)
