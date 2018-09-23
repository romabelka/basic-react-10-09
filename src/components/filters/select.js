import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setSelectedArticles } from '../../ac'
import Select from 'react-select'

class SelectFilter extends Component {
  static propTypes = {
    articles: PropTypes.array.isRequired
  }

  handleChange = (selectedArticles) => {
    const { setSelectedArticles } = this.props

    setSelectedArticles(selectedArticles)
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
        value={this.props.selectedArticles}
        onChange={this.handleChange}
        isMulti
      />
    )
  }
}

const mapStateToProps = (state) => ({
  articles: state.articles
})

const mapDispatchToProps = {
  setSelectedArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
