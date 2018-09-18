import React, { Component } from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types'

class SelectFilter extends Component {
  state = {
    selected: null
  }

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
        value={this.state.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

SelectFilter.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default SelectFilter
