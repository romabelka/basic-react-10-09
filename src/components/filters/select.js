import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectArticle } from '../../ac'
import PropTypes from 'prop-types'
import Select from 'react-select'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = (selected) => this.props.selectArticle({ selected })

  get options() {
    const { articles } = this.props
    return articles.map((article) => ({
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
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default connect(
  (state) => ({
    articles: state.articles
  }),
  { selectArticle }
)(SelectFilter)
