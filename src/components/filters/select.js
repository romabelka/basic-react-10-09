import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'

class SelectFilter extends Component {
  // static propTypes = {
  //     articles: PropTypes.array.isRequired
  // }

  // state = {
  //     selected: null
  // }

  handleChange = (selected) => {
    console.log(this.props)
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
        value={this.props.articles}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect((state) => ({
  selected: state.filters,
  articles: state.articles
}))(SelectFilter)
