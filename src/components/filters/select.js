import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { filterArticleId } from '../../ac'
import { connect } from 'react-redux'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  state = {
    selected: null
  }

  handleChange = (selected) => {
    this.setState({ selected })
    this.handlefilterArticleId(selected)
  }

  handlefilterArticleId = (selected) => {
    const { filterArticleId } = this.props
    selected.forEach(function(item) {
      filterArticleId(item.value)
    })
  }

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
        value={this.state.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}
export default connect(
  null,
  { filterArticleId }
)(SelectFilter)
