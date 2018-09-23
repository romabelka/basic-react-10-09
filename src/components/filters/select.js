import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  // todo - should be change to dispatch
  handleChange = (selected) => this.setState({ selected })

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

export default connect((state) => ({
  articles: state.articles,
  selectedArticles: state.filters.selectedArticles
}))(SelectFilter)
