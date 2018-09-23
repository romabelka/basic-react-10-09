import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    selectedArticlesList: PropTypes.array,
    handleSelectArticle: PropTypes.func
  }

  handleChange = (selectedArticlesList) =>
    this.props.handleSelectArticle(selectedArticlesList)

  get options() {
    return this.props.articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
  }

  render() {
    const { selectedArticlesList } = this.props
    return (
      <Select
        options={this.options}
        value={selectedArticlesList}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

export default SelectFilter
