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
    this.props.filterArticles({ selected }, FILTER_BY_NAME, this.props.articles)

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
        value={this.props.namesFilter}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: Object.assign([], state.articles), // just for test example (deep copy is absent)
    namesFilter: state.filter.namesFilter
  }),
  { filterArticles }
)(SelectFilter)
