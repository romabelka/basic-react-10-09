import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Select from 'react-select'
import { selectArticles } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = (selected) =>
    this.props.selectArticles(selected.filter((option) => option.value))

  render() {
    const { articles, selected, selectArticles } = this.props
    const options = articles.map((article) => ({
      label: article.title,
      value: article.id
    }))

    return (
      <Select
        options={options}
        value={selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles,
    selected: state.filters.selected
  }),
  { selectArticles }
)(SelectFilter)
