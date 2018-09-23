import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { setSelectFilter } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const { handleChange } = this.props
    return (
      <Select
        options={this.options}
        value={this.props.selectId}
        onChange={handleChange}
        isMulti
      />
    )
  }
}
const mapDispatchToProps = {
  handleChange: setSelectFilter
}

export default connect(
  (state) => ({
    articles: state.articles,
    value: state.filter.selectId
  }),
  mapDispatchToProps
)(SelectFilter)
