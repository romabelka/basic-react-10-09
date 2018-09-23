import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticle } from '../../ac'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    selected: PropTypes.array,
    selectArticle: PropTypes.func
  }

  handleChange = (selected) => this.props.selectArticle(selected)

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
        value={this.props.selected}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

const mapStateToProps = ({ articles, select }) => ({
  articles,
  selected: select
})

export default connect(
  mapStateToProps,
  { selectArticle }
)(SelectFilter)
