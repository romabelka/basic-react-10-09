import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = (selected) => this.props.onFilterChange({ selected: selected })

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const { selected } = this.props
    return (
      <Select
        options={this.options}
        value={selected}
        onChange={this.props.onFilterChange}
        isMulti
      />
    )
  }
}

export default SelectFilter
