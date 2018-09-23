import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import { connect } from 'react-redux'

import { filterArticles } from '../../ac'

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
    return (
      <div>
        <Select
          options={this.options}
          value={this.props.selected}
          onChange={this.props.filterSelected}
          isMulti
        />
      </div>
    )
  }
}

function mapStateToProps(storeState) {
  return {
    articles: storeState.articles
  }
}

const mapDispatchToProps = {
  filterSelected: filterArticles
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectFilter)
